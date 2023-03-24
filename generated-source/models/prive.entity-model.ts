import { IClub } from './club.entity-model';
import { IPriveOrder } from './prive-order.entity-model';
import { IPriveCategory } from './prive-category.entity-model';
export interface IPrive {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  name: string;
  capacity: number;
  minimumBill?: number;
  enabled: boolean;
  club?: IClub;
  priveOrders?: IPriveOrder[];
  categories?: IPriveCategory[];
}
