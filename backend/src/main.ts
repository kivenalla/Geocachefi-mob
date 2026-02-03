import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as session from 'express-session';
import * as fs from "fs";
import * as path from "path";
import * as cookieParser from 'cookie-parser';
const MemoryStore = require('memorystore')(session);
async function bootstrap() {
    
    const httpsOptions = {
        key: fs.readFileSync(path.join(
            __dirname,
            'config/config/localhost-key.pem'
        )),
        cert: fs.readFileSync(path.join(
            __dirname,
            'config/config/localhost.crt'
        )),
    };
    
    const app = await NestFactory.create(AppModule, {
            logger: ['verbose'],
            httpsOptions,
        }
    );
    // Meaby in prod
    // app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

    app.use(
        session({
            cookie: { maxAge: 30 * 60 * 1000 },
            store: new MemoryStore({
                checkPeriod: 30 * 60 * 1000,
            }),
            secret: process.env.SESSION_SECRET ?? 'default-very-strong-secret',
            resave: false,
            saveUninitialized: false,
        }),
    );
    
    const config = new DocumentBuilder()
        .setTitle('Geocache api')
        .setDescription('The Geocache api API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    // 👇 Enable cookie parsing globally
    app.use(cookieParser());
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://localhost:3000',
            'http://localhost:3001',
            'http://localhost:3002',
            'http://localhost:3004',
            'http://host.docker.internal:3004',
            'https://host.docker.internal:3004',
            'https://localhost:3004',
            'http://localhost:4000',
        ].concat(process.env.CORS_ALLOWED_DOMAINS?.split(',') || []),
        methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
