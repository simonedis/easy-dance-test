import { IUser } from './user.entity-model';
import { IParty } from './party.entity-model';
export interface IPartyParticipation {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  user?: IUser;
  party?: IParty;
}
