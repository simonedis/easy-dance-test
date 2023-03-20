import { EntitySchema } from 'typeorm';
import { IParty } from '../models/party.entity-model';
export const PartyEntitySchema = new EntitySchema<IParty>({
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
    title: { type: 'varchar', name: 'title' },
    isWaitingList: { type: 'boolean', name: 'isWaitingList' },
    hidden: { type: 'boolean', name: 'hidden' },
    from: { type: 'bigint', name: 'from' },
    to: { type: 'bigint', name: 'to' },
    cover: { type: 'varchar', name: 'cover' },
  },
  relations: {
    club: { type: 'many-to-one', target: 'club', inverseSide: 'parties' },
    address: { type: 'one-to-one', target: 'address' },
  },
  name: 'party',
  tableName: 'party',
});
