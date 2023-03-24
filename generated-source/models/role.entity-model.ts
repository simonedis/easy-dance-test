import { IUser } from './user.entity-model';
export interface IRole {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  name: string;
  users?: IUser[];
}
