import { Injectable } from '@nestjs/common';
import { GeocachingUser } from "@app/geocaching-api/generated/types/Api";
import axios from "axios";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GeocachingApiService {
    private readonly baseApiUrl;
    
    constructor(private readonly configService: ConfigService) {
        let isProduction = this.configService.get('NODE_ENV') === 'production';
        this.baseApiUrl = isProduction ? 'https://api.groundspeak.com' : 'https://staging.api.groundspeak.com';
    }

    getBaseApiUrl(): string {
        return this.baseApiUrl;
    }
    
    async getAuthorizedUser(
        geocachingAccessToken: string,
        fields?: (keyof GeocachingUser)[]
    ): Promise<GeocachingUser> {
        const params = new URLSearchParams();
        if (fields && fields.length > 0) {
            params.append("fields", fields.join(","));
        }
        
        try {
            const response = await axios.get<GeocachingUser>(
                `${this.baseApiUrl}/v1/users/me${params.toString() ? `?${params.toString()}` : ""}`,
                {
                    headers: {
                        Authorization: `Bearer ${geocachingAccessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Geocaching API error:", error.response?.status, error.response?.data);
            }
            throw new Error("Failed to fetch authorized user.");
        }
    }
}
