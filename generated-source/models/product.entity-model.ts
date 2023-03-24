import { IWarehouse } from './warehouse.entity-model';
export interface IProduct {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  name: string;
  price: number;
  qta: number;
  warehouse?: IWarehouse;
}
