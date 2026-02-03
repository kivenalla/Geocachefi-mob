import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { UsersService } from "@app/users";
import { Repository } from "typeorm";
import { User } from "@app/users/user.entity";
import { AuthService } from "@app/auth";

describe('UserE2E (e2e)', () => {
    // let app: INestApplication<App>;
    // let userService: UsersService;
    // let userRepository: Repository<User>;
    // let authService: AuthService;
    //
    // beforeEach(async () => {
    //     const moduleFixture: TestingModule = await Test.createTestingModule({
    //         imports: [AppModule],
    //     }).compile();
    //
    //     app = moduleFixture.createNestApplication();
    //
    //     userService = await app.resolve(UsersService)
    //     userRepository = await app.resolve(Repository<User>)
    //     authService = await app.resolve(AuthService)
    //     await app.init();
    // });
    //
    // it('/ (GET)', () => {
    //
    //     const user = await userRepository.save({
    //         id:
    //     })
    //
    //     userService.createOAuthUser({})
    //
    //     const { access_token } = await authService.signFor(user)
    //
    //     const response = await request(app.getHttpServer())
    //         .post('/geocaches/search')
    //         .data()
    //         .set('Authorization', access_token)
    //         .expect(200)
    //         .expect('Hello World!');
    //
    //     request(app.getHttpServer())
    //         .get('/')
    //         .expect(200)
    //         .expect('Hello World!');
    // });
});
