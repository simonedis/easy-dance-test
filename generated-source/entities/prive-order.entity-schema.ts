import { EntitySchema } from 'typeorm';
import { IPriveOrder } from '../models/prive-order.entity-model';
export const PriveOrderEntitySchema = new EntitySchema<IPriveOrder>({
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
    bill: { type: 'bigint', nullable: true, default: null, name: 'bill' },
    name: { type: 'enum', enum: ['COMPLETED', 'IN_PROGRESS'], name: 'name' },
  },
  relations: {
    prive: { type: 'many-to-one', target: 'prive', inverseSide: 'orders' },
    user: { type: 'many-to-one', target: 'user', inverseSide: 'orders' },
    rows: {
      type: 'one-to-many',
      target: 'priveOrderRow',
      inverseSide: 'order',
    },
  },
  name: 'priveOrder',
  tableName: 'priveOrder',
});
