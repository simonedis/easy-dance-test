import { EntitySchema } from 'typeorm';
import { IClubFollower } from '../models/club-follower.entity-model';
export const ClubFollowerEntitySchema = new EntitySchema<IClubFollower>({
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
      type: 'many-to-one',
      target: 'user',
      joinTable: true,
      inverseSide: 'clubs',
    },
    club: {
      type: 'many-to-one',
      target: 'club',
      joinTable: true,
      inverseSide: 'following',
    },
  },
  name: 'clubFollower',
  tableName: 'clubFollower',
});
