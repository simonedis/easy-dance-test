import { IUser } from './user.entity-model';
import { IPrivePartyRule } from './prive-party-rule.entity-model';
export interface IPriveReservation {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  status: any;
  user?: IUser;
  privePartyRule?: IPrivePartyRule;
}
