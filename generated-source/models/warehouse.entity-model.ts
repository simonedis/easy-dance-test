import { IProduct } from './product.entity-model';
import { IClub } from './club.entity-model';
export interface IWarehouse {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  products?: IProduct[];
  club?: IClub;
}
