import { MigrationInterface, QueryRunner } from 'typeorm';

export class GeneratedMigration1704684735708 implements MigrationInterface {
  name = 'GeneratedMigration1704684735708';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "permissions" ("id" SERIAL NOT NULL, "permission" character varying(20) NOT NULL, CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "permissions"`);
  }
}
