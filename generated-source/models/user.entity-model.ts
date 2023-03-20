import { IUserFollower } from './user-follower.entity-model';
import { IClub } from './club.entity-model';
export interface IUser {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  username: string;
  email: string;
  password: string;
  followers?: IUserFollower[];
  followings?: IUserFollower[];
  club?: IClub;
}
