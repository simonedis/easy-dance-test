import { IPriceListItem } from './price-list-item.entity-model';
export interface IPriveOrderRow {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  price: number;
  qty: number;
  priceListItem?: IPriceListItem;
}
