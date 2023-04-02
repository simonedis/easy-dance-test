import { MigrationInterface, QueryRunner } from 'typeorm';
import { RoleEntitySchema } from '../../../generated-source/entities/role.entity-schema';

export class roleSeeder1680428682094 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(RoleEntitySchema, {
      name: 'ADMIN',
    });
    await queryRunner.manager.save(RoleEntitySchema, {
      name: 'USER',
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
