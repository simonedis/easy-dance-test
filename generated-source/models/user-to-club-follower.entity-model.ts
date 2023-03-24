import { IUser } from './user.entity-model';
import { IClub } from './club.entity-model';
export interface IUserToClubFollower {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  user?: IUser;
  club?: IClub;
}
