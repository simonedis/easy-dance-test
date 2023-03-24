import { EntitySchema } from 'typeorm';
import { IPriveCategory } from '../models/prive-category.entity-model';
export const PriveCategoryEntitySchema = new EntitySchema<IPriveCategory>({
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
    minimumBill: {
      type: 'bigint',
      nullable: true,
      default: null,
      name: 'minimumBill',
    },
  },
  relations: {
    club: { target: 'club', type: 'many-to-one', inverseSide: 'categories' },
  },
  name: 'priveCategory',
  tableName: 'priveCategory',
});
