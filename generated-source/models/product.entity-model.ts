import { IWarehouse } from './warehouse.entity-model';
export interface IProduct {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  name: string;
  price: string;
  qta: string;
  warehouse?: IWarehouse;
}
