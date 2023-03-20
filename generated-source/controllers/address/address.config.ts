import {
  CreateAddressRequestDto,
  CreateAddressResponseDto,
  UpdateAddressRequestDto,
  UpdateAddressResponseDto,
  PatchAddressRequestDto,
  PatchAddressResponseDto,
  GetAddressResponseDto,
} from './dto/dto';
import { IAddress } from '../../models/address.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IAddress> = {
  create: {
    request: CreateAddressRequestDto,
    response: CreateAddressResponseDto,
  },
  update: {
    request: UpdateAddressRequestDto,
    response: UpdateAddressResponseDto,
  },
  get: {
    request: undefined,
    response: GetAddressResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetAddressResponseDto,
  },
  patch: {
    request: PatchAddressRequestDto,
    response: PatchAddressResponseDto,
  },
};
