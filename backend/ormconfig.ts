import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'nestjs',
    logging: true,
    synchronize: false,
    name: 'default',
    entities: [`${__dirname}/**/**.entity{.ts,.js}`],
});