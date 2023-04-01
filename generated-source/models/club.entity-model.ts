import { IUser } from './user.entity-model';
import { IAddress } from './address.entity-model';
import { IParty } from './party.entity-model';
import { IWarehouse } from './warehouse.entity-model';
export interface IClub {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  name: string;
  cover: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
  owner?: IUser;
  address?: IAddress;
  parties?: IParty[];
  warehouse?: IWarehouse;
}
