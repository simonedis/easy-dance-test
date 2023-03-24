import { IClub } from './club.entity-model';
import { IAddress } from './address.entity-model';
export interface IParty {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  title: string;
  isWaitingList: boolean;
  hidden: boolean;
  from: number;
  to: number;
  cover: string;
  club?: IClub;
  address?: IAddress;
}
