import { MigrationInterface, QueryRunner } from 'typeorm';

export class GeneratedMigration1704552968743 implements MigrationInterface {
  name = 'GeneratedMigration1704552968743';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "FK_dde70ae44ca99554e3138384f4a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "UQ_dde70ae44ca99554e3138384f4a"`,
    );
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "wallet_id"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "clients" ADD "wallet_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "UQ_dde70ae44ca99554e3138384f4a" UNIQUE ("wallet_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "FK_dde70ae44ca99554e3138384f4a" FOREIGN KEY ("wallet_id") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
