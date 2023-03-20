import { IUser } from './user.entity-model';
export interface IUserFollower {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  follower?: IUser;
  followed?: IUser;
}
