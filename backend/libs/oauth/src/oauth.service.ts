import { randomBytes, createHash } from 'crypto';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import axios from "axios";
import { GeocachingUser } from "@app/geocaching-api/generated/types/Api";
import { GeocachingApiService } from "@app/geocaching-api";

@Injectable()
export class OAuthService {
    
    private readonly clientId;
    private readonly clientSecret;
    private readonly redirectUri;
    private readonly authorizeUrl;
    private readonly tokenUrl;
    
    constructor(
        private readonly configService: ConfigService,
    ) {
        this.clientId = this.configService.get('CONSUMER_KEY');
        this.clientSecret = this.configService.get('CONSUMER_SECRET');
        this.redirectUri = this.configService.get('OAUTH_REDIRECT_URI');
        let isProduction = this.configService.get('NODE_ENV') === 'production';
        this.authorizeUrl =
            isProduction
                ? 'https://www.geocaching.com/oauth/authorize.aspx'
                : 'https://staging.geocaching.com/oauth/authorize.aspx';
        this.tokenUrl =
            isProduction
                ? 'https://oauth.geocaching.com/token'
                : 'https://oauth-staging.geocaching.com/token';
    }
    
    private generateCodeVerifier(length: number): string {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
        const randomValues = randomBytes(length);
        return Array.from(randomValues, (v) => charset[v % charset.length]).join('');
    }
    
    private generateCodeChallenge(codeVerifier: string): string {
        const hash = createHash('sha256').update(codeVerifier).digest();
        return hash.toString('base64url');
    }
    
    createPkcePair(length = 128) {
        const codeVerifier = this.generateCodeVerifier(length);
        const codeChallenge = this.generateCodeChallenge(codeVerifier);
        return { codeVerifier, codeChallenge };
    }
    
    getAuthorizeUrl(): { url: string; state: string; codeVerifier: string } {
        const state = randomBytes(16).toString('hex');
        const pkcePair = this.createPkcePair();
        const params = new URLSearchParams({
            client_id: this.clientId,
            response_type: 'code',
            scope: '*',
            redirect_uri: this.redirectUri,
            state: state,
            code_challenge: pkcePair.codeChallenge,
            code_challenge_method: 'S256',
        });
        return {
            url: `${this.authorizeUrl}?${params.toString()}`,
            state: state,
            codeVerifier: pkcePair.codeVerifier
        };
    }
    
    async exchangeCodeForToken(code: string, codeVerifier: string): Promise<{
        access_token: string,
        refresh_token: string,
        token_type: string | 'bearer',
        expires_in: number,
    }> {
        const params = new URLSearchParams({
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: "authorization_code",
            redirect_uri: this.redirectUri,
            code: code,
            code_verifier: codeVerifier,
        });
        try {
            const res = await fetch(this.tokenUrl, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            });
            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`Token request failed (${res.status}): ${errText}`)
            }
            return await res.json();
            
        } catch (err) {
            throw new Error(`Token exchange failed: ${err instanceof Error ? err.message : String(err)}`);
        }
    };
    
    async refreshAccessToken(refreshToken: string) {
        const params = new URLSearchParams({
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: "refresh_token",
            redirect_uri: this.redirectUri,
            refresh_token: refreshToken,
        });
        try {
            const res = await fetch(this.tokenUrl, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            });
            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`Token refresh failed (${res.status}): ${errText}`)
            }
            return await res.json();
            
        } catch (err) {
            throw new Error(`Token refresh call failed: ${err instanceof Error ? err.message : String(err)}`);
        }
    };
}
