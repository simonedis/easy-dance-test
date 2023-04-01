import { IPriceListItem } from './price-list-item.entity-model';
export interface IPriveOrderRow {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  price: number;
  qty: number;
  priceListItem?: IPriceListItem;
}
