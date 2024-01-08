import { MigrationInterface, QueryRunner } from 'typeorm';

export class GeneratedMigration1704556131543 implements MigrationInterface {
  name = 'GeneratedMigration1704556131543';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "wallets" DROP COLUMN "private_key"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "wallets" ADD "private_key" character varying(100) NOT NULL`,
    );
  }
}
