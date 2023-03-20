import { IScope } from './scope.entity-model';
export interface IRole {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  name: string;
  scopes?: IScope[];
}
