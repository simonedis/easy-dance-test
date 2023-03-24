import { IClub } from './club.entity-model';
export interface IPriveCategory {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  name: string;
  minimumBill?: number;
  club?: IClub;
}
