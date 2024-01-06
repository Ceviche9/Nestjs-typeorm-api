import { MigrationInterface, QueryRunner } from 'typeorm';

export class GeneratedMigration1704553035248 implements MigrationInterface {
  name = 'GeneratedMigration1704553035248';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "wallets" ADD "client_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "wallets" ADD CONSTRAINT "UQ_c2c1193e212d5ee094d8d3f345b" UNIQUE ("client_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "wallets" ADD CONSTRAINT "FK_c2c1193e212d5ee094d8d3f345b" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "wallets" DROP CONSTRAINT "FK_c2c1193e212d5ee094d8d3f345b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "wallets" DROP CONSTRAINT "UQ_c2c1193e212d5ee094d8d3f345b"`,
    );
    await queryRunner.query(`ALTER TABLE "wallets" DROP COLUMN "client_id"`);
  }
}
