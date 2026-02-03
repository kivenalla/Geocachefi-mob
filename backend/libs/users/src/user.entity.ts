import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { Role } from "@app/auth/roles/role.enum";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Index()
    @Column({ length: 120, nullable: true })
    email: string;
    
    @Column({ length: 80, nullable: true })
    name: string;
    
    // store hashed password only
    @Column()
    passwordHash: string;
    
    // token invalidation: increment on logout to invalidate old JWTs
    @Column({ type: 'int', default: 0 })
    tokenVersion: number;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
    
    @Column("text", { array: true, default: [Role.GUEST_USER] })
    roles?: Role[];
    
    @Column({ nullable: true, unique: true })
    geocachingReferenceCode?: string;
    
    @Column({ nullable: true })
    geocachingAccessToken?: string;
    
    @Column({ nullable: true })
    geocachingRefreshToken?: string;
    
    @Column({ type: 'timestamp', nullable: true })
    geocachingTokenExpiresAt?: Date;
    
    @ApiProperty()
    @Expose()
    get isGuestUser(): boolean {
        let isGuestUser = this?.roles?.some(role => role === Role.GUEST_USER);
        return isGuestUser && this.roles?.length === 1 || false
    }
    
    @ApiProperty()
    @Expose()
    get isPremiumUser(): boolean {
        return this?.roles?.some(role => role === Role.PREMIUM_USER) || false
    }
    
    @ApiProperty()
    @Expose()
    get isAdminUser(): boolean {
        return this?.roles?.some(role => role === Role.ADMIN_USER) || false
    }
}
