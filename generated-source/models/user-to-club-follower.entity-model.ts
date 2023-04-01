import { IUser } from './user.entity-model';
import { IClub } from './club.entity-model';
export interface IUserToClubFollower {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  user?: IUser;
  club?: IClub;
}
