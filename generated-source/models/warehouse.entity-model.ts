import { IProduct } from './product.entity-model';
import { IClub } from './club.entity-model';
export interface IWarehouse {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  products?: IProduct[];
  club?: IClub;
}
