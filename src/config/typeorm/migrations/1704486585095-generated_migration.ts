import { MigrationInterface, QueryRunner } from 'typeorm';

export class GeneratedMigration1704486585095 implements MigrationInterface {
  name = 'GeneratedMigration1704486585095';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "wallets" DROP COLUMN "address"`);
    await queryRunner.query(
      `ALTER TABLE "wallets" ADD "address" character varying(100) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "wallets" DROP COLUMN "private_key"`);
    await queryRunner.query(
      `ALTER TABLE "wallets" ADD "private_key" character varying(100) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "wallets" DROP COLUMN "private_key"`);
    await queryRunner.query(
      `ALTER TABLE "wallets" ADD "private_key" character varying(200) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "wallets" DROP COLUMN "address"`);
    await queryRunner.query(
      `ALTER TABLE "wallets" ADD "address" character varying(200) NOT NULL`,
    );
  }
}
