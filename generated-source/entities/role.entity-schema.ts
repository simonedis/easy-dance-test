import { EntitySchema } from 'typeorm';
import { IRole } from '../models/role.entity-model';
export const RoleEntitySchema = new EntitySchema<IRole>({
  columns: {
    id: { type: 'integer', primary: true, generated: 'increment', name: 'id' },
    uuid: { type: 'uuid', generated: 'uuid', name: 'uuid' },
    createdAt: { type: 'timestamp', default: 'NOW()', name: 'createdAt' },
    updatedAt: {
      type: 'timestamp',
      default: null,
      onUpdate: 'NOW()',
      updateDate: true,
      name: 'updatedAt',
    },
    deletedAt: {
      type: 'timestamp',
      default: null,
      deleteDate: true,
      name: 'deletedAt',
    },
    createdBy: { type: 'uuid', nullable: true, name: 'createdBy' },
    updatedBy: { type: 'uuid', nullable: true, name: 'updatedBy' },
    deletedBy: { type: 'uuid', nullable: true, name: 'deletedBy' },
    name: { type: 'varchar', name: 'name' },
  },
  relations: {
    users: { type: 'many-to-many', target: 'user', joinTable: true },
  },
  name: 'role',
  tableName: 'role',
});
