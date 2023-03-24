import { IParty } from './party.entity-model';
import { IPrive } from './prive.entity-model';
export interface IPrivePartyRule {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  minimumBill: number;
  party?: IParty;
  prive?: IPrive;
}
