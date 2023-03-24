import { IUser } from './user.entity-model';
import { IParty } from './party.entity-model';
export interface IPartyParticipation {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  user?: IUser;
  party?: IParty;
}
