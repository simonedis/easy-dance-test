import { EntitySchema } from 'typeorm';
import { IPrive } from '../models/prive.entity-model';
export const PriveEntitySchema = new EntitySchema<IPrive>({
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
    capacity: { type: 'integer', name: 'capacity' },
    minimumBill: {
      type: 'bigint',
      nullable: true,
      default: null,
      name: 'minimumBill',
    },
    enabled: { type: 'boolean', default: true, name: 'enabled' },
  },
  name: 'prive',
  tableName: 'prive',
});
