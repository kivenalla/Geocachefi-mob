import { MigrationInterface, QueryRunner } from "typeorm";

export class Feature37UserFields1762363518336 implements MigrationInterface {
    name = 'Feature37UserFields1762363518336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "geocachingReferenceCode" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_eb9f0ca0a53db8876ae438a40c2" UNIQUE ("geocachingReferenceCode")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "geocachingAccessToken" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "geocachingRefreshToken" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "geocachingTokenExpiresAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "name" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "geocachingTokenExpiresAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "geocachingRefreshToken"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "geocachingAccessToken"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_eb9f0ca0a53db8876ae438a40c2"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "geocachingReferenceCode"`);
    }

}
