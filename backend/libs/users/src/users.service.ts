import { Injectable, NotFoundException, UnauthorizedException, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';

import { RegisterDto } from './dto/register.dto';
import { User } from "@app/users/user.entity";
import { Role } from "@app/auth/roles/role.enum";
import { Response } from "express";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly repo: Repository<User>,
        private readonly jwt: JwtService,
        private readonly configService: ConfigService
    ) {}
    
    // ---------- helpers ----------
    private async hashPassword(plain: string) {
        return bcrypt.hash(plain, 12);
    }
    
    signAccessToken(user: User) {
        // include tokenVersion so we can invalidate on logout
        return this.jwt.sign({
            sub: user.id,
            email: user.email,
            tv: user.tokenVersion,
            geocachingAccessToken: user.geocachingAccessToken,
        });
    }
    
    // ---------- core actions ----------
    async register(dto: RegisterDto) {
        const existing = await this.repo.findOne({ where: { email: dto.email } });
        // if (existing) throw new ConflictException('Email already in use');
        
        const passwordHash = await this.hashPassword(dto.password);
        const user = this.repo.create({
            email: dto.email,
            name: dto.name,
            passwordHash,
        });
        const saved = await this.repo.save(user);
        const { passwordHash: _, ...safe } = saved;
        return safe;
    }
    
    async login(email: string, password: string) {
        const user = await this.repo.findOne({ where: { email } });
        if (!user) throw new UnauthorizedException('Invalid credentials');
        
        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) throw new UnauthorizedException('Invalid credentials');
        
        const access_token = this.signAccessToken(user);
        const { passwordHash, ...safe } = user;
        return { access_token, user: safe };
    }
    
    async logout(userId: string) {
        // bump tokenVersion — invalidates all existing access tokens for the user
        const user = await this.repo.findOne({ where: { id: userId } });
        if (!user) throw new NotFoundException('User not found');
        
        user.tokenVersion += 1;
        await this.repo.save(user);
        return { success: true };
    }
    
    async findById(id: string) {
        const user = await this.repo.findOne({ where: { id } });
        if (!user) throw new NotFoundException('User not found');
        return user;
    }
    
    async findOneBy(whereOptions: FindOneOptions<User>): Promise<User | null> {
        return await this.repo.findOne(whereOptions)
    }
    
    async findByGeocachingRef(referenceCode: string): Promise<User | null> {
        return this.repo.findOne({ where: { geocachingReferenceCode: referenceCode } });
    }
    
    async createOAuthUser(params: { name: string; referenceCode: string }) {
        // Create a synthetic email from referenceCode
        const fakeEmail = `${params.referenceCode}@geocaching.local`;
        
        const user = this.repo.create({
            email: fakeEmail,
            name: params.name || 'Geocacher',
            geocachingReferenceCode: params.referenceCode,
            passwordHash: '', // no password for OAuth
        });
        
        return this.repo.save(user);
    }

    async updateUserRoles(userId: string, membershipLevelId: number) {
      const user = await this.repo.findOne({ where: { id: userId } });
      if (!user) throw new NotFoundException('User not found');

      // Add premium role if geocaching.com premium user
      if (membershipLevelId > 1 && !user.roles?.includes(Role.PREMIUM_USER)) {
        user.roles?.push(Role.PREMIUM_USER);
      };

      // Remove premium role if no longer geocaching.com premium user
      if (membershipLevelId <= 1 && user.roles?.includes(Role.PREMIUM_USER)) {
        user.roles = user.roles.filter(r => r !== Role.PREMIUM_USER);
      };

      await this.repo.save(user);
      return user;
    }

    async refreshUserAccessToken(userId: string) {
      const user = await this.repo.findOne({ where: { id: userId } });
      if (!user) throw new NotFoundException('User not found');
      const refresh_token = user.geocachingRefreshToken;

      try {
        const response = await axios.post(
          "https://host.docker.internal:3003/oauth/refresh",
          {
            refresh_token: refresh_token
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        await this.updateGeocachingTokens(user.id, response.data);
        return response.data.access_token;

      } catch (error: any) {
        console.error(
          "Failed to refresh access token:",
          error.response?.data || error.message
        );
        throw error;
      }
    }
    
    async updateGeocachingTokens(userId: string, tokens: {
        access_token: string;
        refresh_token: string;
        expires_in: number; // usually in seconds
    }) {
        const user = await this.repo.findOne({ where: { id: userId } });
        if (!user) throw new NotFoundException('User not found');
        
        user.geocachingAccessToken = tokens.access_token;
        user.geocachingRefreshToken = tokens.refresh_token;
        user.geocachingTokenExpiresAt = new Date(Date.now() + tokens.expires_in * 1000);
        
        await this.repo.save(user);
        return user;
    }
    
    setAuthCookie(res: Response, token: string): void {
        res.cookie(this.configService.get('AUTH_COOKIE_NAME', 'authorization'), token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
            domain: this.configService.get('FRONTEND_DOMAIN', 'host.docker.internal'),
            maxAge: Number(this.configService.get("COOKIE_MAX_AGE", 60 * 60 * 1000)),
        });
    }
    
    clearAuthCookie(res: Response): void {
        res.clearCookie(this.configService.get('AUTH_COOKIE_NAME', 'authorization'), {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
            domain: this.configService.get('FRONTEND_DOMAIN', 'host.docker.internal'),
        });
    }
    
}
