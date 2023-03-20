import { EntitySchema } from 'typeorm';
import { IClub } from '../models/club.entity-model';
export const ClubEntitySchema = new EntitySchema<IClub>({
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
    cover: { type: 'varchar', name: 'cover' },
    phone: { type: 'varchar', name: 'phone' },
    email: { type: 'varchar', name: 'email' },
    facebook: { type: 'varchar', name: 'facebook' },
    instagram: { type: 'varchar', name: 'instagram' },
    whatsapp: { type: 'varchar', name: 'whatsapp' },
  },
  relations: {
    owner: {
      target: 'user',
      type: 'one-to-one',
      inverseSide: 'club',
      nullable: true,
      joinColumn: true,
    },
    address: {
      target: 'address',
      type: 'one-to-one',
      inverseSide: 'club',
      joinColumn: true,
    },
    parties: { target: 'party', type: 'one-to-many', inverseSide: 'club' },
    warehouse: { target: 'warehouse', type: 'one-to-one', inverseSide: 'club' },
  },
  name: 'club',
  tableName: 'club',
});
