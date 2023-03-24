import { IRole } from './role.entity-model';
import { IUserToUserFollower } from './user-to-user-follower.entity-model';
import { IUserToClubFollower } from './user-to-club-follower.entity-model';
import { IClub } from './club.entity-model';
export interface IUser {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  username: string;
  email: string;
  password: string;
  roles?: IRole[];
  followers?: IUserToUserFollower[];
  followings?: IUserToUserFollower[];
  followingClubs?: IUserToClubFollower[];
  club?: IClub;
}
