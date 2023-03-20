import { EntitySchema } from 'typeorm';
import { IAddress } from '../models/address.entity-model';
export const AddressEntitySchema = new EntitySchema<IAddress>({
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
    street: { type: 'varchar', name: 'street' },
    streetNumber: { type: 'varchar', name: 'streetNumber' },
    cap: { type: 'varchar', name: 'cap' },
    city: { type: 'varchar', name: 'city' },
    country: { type: 'varchar', name: 'country' },
    lat: { type: 'bigint', nullable: true, name: 'lat' },
    lng: { type: 'bigint', nullable: true, name: 'lng' },
  },
  name: 'address',
  tableName: 'address',
});
