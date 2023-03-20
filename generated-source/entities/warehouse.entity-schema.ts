import { EntitySchema } from 'typeorm';
import { IWarehouse } from '../models/warehouse.entity-model';
export const WarehouseEntitySchema = new EntitySchema<IWarehouse>({
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
  },
  relations: {
    products: {
      target: 'product',
      type: 'one-to-many',
      inverseSide: 'warehouse',
    },
    club: { target: 'club', type: 'one-to-one', inverseSide: 'warehouse' },
  },
  name: 'warehouse',
  tableName: 'warehouse',
});
