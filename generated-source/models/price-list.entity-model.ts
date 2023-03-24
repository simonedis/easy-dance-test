import { IParty } from './party.entity-model';
export interface IPriceList {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  party?: IParty;
}
