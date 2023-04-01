import { IClub } from './club.entity-model';
export interface IPriveCategory {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  name: string;
  minimumBill?: number;
  club?: IClub;
}
