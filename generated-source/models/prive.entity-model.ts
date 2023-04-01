import { IClub } from './club.entity-model';
import { IPriveOrder } from './prive-order.entity-model';
import { IPriveCategory } from './prive-category.entity-model';
export interface IPrive {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  name: string;
  capacity: number;
  minimumBill?: number;
  enabled: boolean;
  club?: IClub;
  priveOrders?: IPriveOrder[];
  categories?: IPriveCategory[];
}
