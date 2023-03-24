import { EntitySchema } from 'typeorm';
import { IPriceList } from '../models/price-list.entity-model';
export const PriceListEntitySchema = new EntitySchema<IPriceList>({
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
      inverseSide: 'priceLists',
    },
  },
  name: 'priceList',
  tableName: 'priceList',
});
