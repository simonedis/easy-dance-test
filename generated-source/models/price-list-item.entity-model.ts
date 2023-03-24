import { IParty } from './party.entity-model';
import { IProduct } from './product.entity-model';
export interface IPriceListItem {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  party?: IParty;
  product?: IProduct;
}
