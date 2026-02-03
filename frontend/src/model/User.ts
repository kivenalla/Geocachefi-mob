export interface User{
    id?: string,
    username: string,
    email: string,
    isPremium: boolean
    access_token?: string
    user?: {
        id?: string
        email: string
        name?: string
        tokenVersion?: number
        createdAt?: string
        updatedAt?: string
        roles?: Array<string>
        username: string,
        isPremium: boolean
    }
}