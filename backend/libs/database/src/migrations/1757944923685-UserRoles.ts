import { MigrationInterface, QueryRunner } from "typeorm";

export class UserRoles1757944923685 implements MigrationInterface {
    name = 'UserRoles1757944923685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "roles" text array NOT NULL DEFAULT '{guest_user}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "roles"`);
    }

}
