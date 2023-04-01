export interface IAddress {
  id: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  street: string;
  streetNumber: string;
  cap: string;
  city: string;
  country: string;
  lat?: number;
  lng?: number;
}
