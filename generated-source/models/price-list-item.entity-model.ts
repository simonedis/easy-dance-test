import { IParty } from './party.entity-model';
import { IProduct } from './product.entity-model';
export interface IPriceListItem {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  party?: IParty;
  product?: IProduct;
}
