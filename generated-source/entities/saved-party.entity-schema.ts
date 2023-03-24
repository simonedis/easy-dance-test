import { EntitySchema } from 'typeorm';
import { ISavedParty } from '../models/saved-party.entity-model';
export const SavedPartyEntitySchema = new EntitySchema<ISavedParty>({
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
    user: {
      target: 'user',
      type: 'many-to-one',
      inverseSide: 'club',
      joinColumn: true,
    },
    party: {
      target: 'party',
      type: 'many-to-one',
      inverseSide: 'club',
      joinColumn: true,
    },
  },
  name: 'savedParty',
  tableName: 'savedParty',
});
