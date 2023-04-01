import { IParty } from './party.entity-model';
import { IPrive } from './prive.entity-model';
export interface IPrivePartyRule {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  minimumBill: number;
  party?: IParty;
  prive?: IPrive;
}
