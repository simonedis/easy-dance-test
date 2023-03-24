import { IUser } from './user.entity-model';
export interface IUserToUserFollower {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  follower?: IUser;
  followed?: IUser;
}
