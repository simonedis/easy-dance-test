import { EntitySchema } from 'typeorm';
import { IPriceListItem } from '../models/price-list-item.entity-model';
export const PriceListItemEntitySchema = new EntitySchema<IPriceListItem>({
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
    party: {
      target: 'party',
      type: 'many-to-one',
      joinTable: true,
      inverseSide: 'priceListItems',
    },
    product: { type: 'many-to-one', target: 'product' },
  },
  name: 'priceListItem',
  tableName: 'priceListItem',
});
