import { MigrationInterface, QueryRunner } from 'typeorm';
import { RoleEntitySchema } from '../../../generated-source/entities/role.entity-schema';

export class roleStaffSeeder1680431417448 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(RoleEntitySchema, {
      name: 'STAFF_WAITER',
    });
    await queryRunner.manager.save(RoleEntitySchema, {
      name: 'STAFF_STEWARD',
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
