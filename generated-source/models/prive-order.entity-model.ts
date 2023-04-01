import { IPrive } from './prive.entity-model';
import { IUser } from './user.entity-model';
import { IPriveOrderRow } from './prive-order-row.entity-model';
export interface IPriveOrder {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  bill?: number;
  name: any;
  prive?: IPrive;
  user?: IUser;
  rows?: IPriveOrderRow[];
}
