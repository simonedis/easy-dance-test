import { IUser } from './user.entity-model';
import { IPrivePartyRule } from './prive-party-rule.entity-model';
export interface IPriveReservation {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  status: any;
  user?: IUser;
  privePartyRule?: IPrivePartyRule;
}
