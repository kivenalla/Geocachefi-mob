import { applyDecorators, ClassSerializerInterceptor, SerializeOptions, SetMetadata, UseGuards, UseInterceptors, } from '@nestjs/common'

import { ApiSecurity, ApiTags } from '@nestjs/swagger'
import { SwaggerSecuritySchemas } from "@app/auth/enums/swagger-security-schemas";
import { JwtAuthGuard } from "@app/auth";

export function DefaultControllerDecorator(
    {
        tags = [], // Default empty tags
    }: {
        
        tags?: string[] // Allow adding Swagger tags
    } = {
        tags: [], // Default empty tags
    }
) {
    const decorators = [
        UseGuards(JwtAuthGuard),
        ApiSecurity(SwaggerSecuritySchemas.JWT),
        UseInterceptors(ClassSerializerInterceptor)
    ]
    
    if (tags.length) {
        decorators.push(ApiTags(...tags)) // Apply Swagger tags if provided
    }
    
    return applyDecorators(...decorators)
}
