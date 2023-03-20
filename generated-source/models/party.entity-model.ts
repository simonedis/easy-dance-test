import { IClub } from './club.entity-model';
import { IAddress } from './address.entity-model';
export interface IParty {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  title: string;
  isWaitingList: string;
  hidden: string;
  from: string;
  to: string;
  cover: string;
  club?: IClub;
  address?: IAddress;
}
