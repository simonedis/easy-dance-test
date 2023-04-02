import { MigrationInterface, QueryRunner } from 'typeorm';
import { RoleEntitySchema } from '../../../generated-source/entities/role.entity-schema';
import { UserEntitySchema } from '../../../generated-source/entities/user.entity-schema';
import { IUser } from '../../../generated-source/models/user.entity-model';
import { hash } from 'bcrypt';

export class users1680431533327 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userRole = await queryRunner.manager.findOne(RoleEntitySchema, {
      where: {
        name: 'USER',
      },
    });
    const admin = await queryRunner.manager.findOne(RoleEntitySchema, {
      where: {
        name: 'ADMIN',
      },
    });
    const steward = await queryRunner.manager.findOne(RoleEntitySchema, {
      where: {
        name: 'STAFF_STEWARD',
      },
    });

    const waiter = await queryRunner.manager.findOne(RoleEntitySchema, {
      where: {
        name: 'STAFF_WAITER',
      },
    });
    const baseUser = async (role, name) => {
      return {
        roles: [role],
        username: name,
        email: name + '@oddastudio.com',
        password: await pass(),
        firstName: 'user',
        lastName: 'user',
        birthDate: new Date('1990-01-01'),
      } as Omit<
        IUser,
        | 'id'
        | 'uuid'
        | 'createdAt'
        | 'createdBy'
        | 'deletedAt'
        | 'deletedBy'
        | 'updatedAt'
        | 'updatedBy'
      > as any;
    };
    const pass = async () => await hash('password', 10);
    await queryRunner.manager.save(
      UserEntitySchema,
      await baseUser(admin, 'admin'),
    );

    await queryRunner.manager.save(
      UserEntitySchema,
      await baseUser(userRole, 'user'),
    );
    await queryRunner.manager.save(
      UserEntitySchema,
      await baseUser(waiter, 'waiter'),
    );
    await queryRunner.manager.save(
      UserEntitySchema,
      await baseUser(steward, 'steward'),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
