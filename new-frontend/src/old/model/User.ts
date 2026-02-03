export type RealDatabaseUser = {
    id?: string
    email: string
    name?: string
    tokenVersion?: number
    createdAt?: string
    updatedAt?: string
    roles?: Array<string>
    isPremiumUser?: boolean
    isGuestUser?: boolean
    isAdminUser?: boolean
};

export interface User{
    id?: string,
    username: string,
    email: string,
    isPremium: boolean
    access_token?: string
    user?: RealDatabaseUser
}