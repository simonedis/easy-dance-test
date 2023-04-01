import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IAddress } from '../../../models/address.entity-model';

export class AddressBaseDto implements IAddress {
  @ApiPropertyExt({ type: Number, required: false })
  id: number;

  @ApiPropertyExt({ type: String, required: false })
  uuid: string;

  @ApiPropertyExt({ type: Date, required: false })
  createdAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  updatedAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  deletedAt: Date;

  @ApiPropertyExt({ type: String, required: false, nullable: true })
  createdBy?: string;

  @ApiPropertyExt({ type: String, required: false, nullable: true })
  updatedBy?: string;

  @ApiPropertyExt({ type: String, required: false, nullable: true })
  deletedBy?: string;

  @ApiPropertyExt({ minLength: 3, maxLength: 350, type: String })
  street: string;

  @ApiPropertyExt({ minLength: 3, maxLength: 50, type: String })
  streetNumber: string;

  @ApiPropertyExt({ minLength: 3, maxLength: 150, type: String })
  cap: string;

  @ApiPropertyExt({ minLength: 3, maxLength: 150, type: String })
  city: string;

  @ApiPropertyExt({ minLength: 3, maxLength: 150, type: String })
  country: string;

  @ApiPropertyExt({ type: Number, nullable: true })
  lat?: number;

  @ApiPropertyExt({ type: Number, nullable: true })
  lng?: number;
}

export class CreateAddressRequestDto extends AddressBaseDto {}

export class CreateAddressResponseDto extends AddressBaseDto {}

export class UpdateAddressRequestDto extends AddressBaseDto {}

export class UpdateAddressResponseDto extends AddressBaseDto {}

export class PatchAddressRequestDto extends AddressBaseDto {}

export class PatchAddressResponseDto extends AddressBaseDto {}

export class FilterAddressRequestDto extends AddressBaseDto {}

export class GetAddressResponseDto extends AddressBaseDto {}
