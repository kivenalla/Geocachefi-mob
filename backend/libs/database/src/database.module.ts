import { Global, Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UserLogin1757931953379 } from "@app/database/migrations/1757931953379-userLogin";
import { UserRoles1757944923685 } from "@app/database/migrations/1757944923685-UserRoles";
import { Feature37UserFields1762363518336 } from "@app/database/migrations/1762363518336-Feature37UserFields";

@Global() // Use only with common needed libs like db
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    type: 'postgres',
                    host: configService.get('POSTGRES_HOST'),
                    port: configService.get('POSTGRES_PORT'),
                    username: configService.get('POSTGRES_USER'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    database: configService.get('POSTGRES_DB'),
                    poolSize: configService.get('POSTGRES_POOL_SIZE', 10),
                    entities: [
                        // If autoload does not work add entity class here
                    ],
                    autoLoadEntities: true,
                    // When configuring TypeORM, we can set the synchronize property to true.
                    // This causes TypeORM to synchronize the database with our entities automatically.
                    // However, using it in production is highly discouraged because it might lead to unexpected data loss.
                    synchronize: false,
                    migrationsRun: true,
                    migrationsTransactionMode: 'all',
                    migrationsTableName: 'migrations',
                    migrations: [
                        UserLogin1757931953379,
                        UserRoles1757944923685,
                        Feature37UserFields1762363518336,
                    ],
                    
                    dropSchema: configService.get('TESTRUNNER') === 'true',
                    extra: {
                        max: configService.get('POSTGRES_POOL_SIZE', 10),
                    },
                    
                    // logging: ['warn'],
                    // maxQueryExecutionTime: 300, // in milliseconds
                } as TypeOrmModuleOptions
            },
        }),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {
}
