import { EntitySchema } from 'typeorm';
import { IPriveOrderRow } from '../models/prive-order-row.entity-model';
export const PriveOrderRowEntitySchema = new EntitySchema<IPriveOrderRow>({
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
    price: { type: 'bigint', name: 'price' },
    qty: { type: 'integer', name: 'qty' },
  },
  relations: {
    priceListItem: {
      type: 'many-to-one',
      target: 'priceListItem',
      inverseSide: 'priveOrderRow',
    },
  },
  name: 'priveOrderRow',
  tableName: 'priveOrderRow',
});
