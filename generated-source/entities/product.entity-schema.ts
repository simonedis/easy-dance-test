import { EntitySchema } from 'typeorm';
import { IProduct } from '../models/product.entity-model';
export const ProductEntitySchema = new EntitySchema<IProduct>({
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
    price: { type: 'bigint', name: 'price' },
    qta: { type: 'bigint', name: 'qta' },
  },
  relations: {
    warehouse: {
      target: 'warehouse',
      type: 'many-to-one',
      inverseSide: 'products',
    },
  },
  name: 'product',
  tableName: 'product',
});
