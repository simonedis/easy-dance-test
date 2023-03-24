export interface IAddress {
  id: number;
  uuid: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: any;
  updatedBy?: any;
  deletedBy?: any;
  street: string;
  streetNumber: string;
  cap: string;
  city: string;
  country: string;
  lat?: number;
  lng?: number;
}
