import { EntitySchema } from 'typeorm';
import { IUser } from '../models/user.entity-model';
export const UserEntitySchema = new EntitySchema<IUser>({
  name: 'user',
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
    username: {
      nullable: false,
      name: 'username',
      type: 'varchar',
      unique: true,
    },
    email: { type: 'varchar', unique: true, name: 'email' },
    password: { type: 'varchar', nullable: true, name: 'password' },
    firstName: { type: 'varchar', nullable: false, name: 'firstName' },
    lastName: { type: 'varchar', nullable: false, name: 'lastName' },
    birthDate: { type: 'timestamp', nullable: false, name: 'birthDate' },
  },
  relations: {
    roles: {
      target: 'role',
      type: 'many-to-many',
      inverseSide: 'users',
      joinTable: { name: 'user_to_role' },
    },
    followers: {
      target: 'userToUserFollower',
      inverseSide: 'followed',
      type: 'one-to-many',
    },
    followings: {
      target: 'userToUserFollower',
      inverseSide: 'follower',
      type: 'one-to-many',
    },
    followingClubs: {
      target: 'userToClubFollower',
      inverseSide: 'user',
      type: 'one-to-many',
    },
    club: {
      type: 'one-to-one',
      nullable: true,
      target: 'club',
      inverseSide: 'owner',
    },
  },
  tableName: 'user',
});
