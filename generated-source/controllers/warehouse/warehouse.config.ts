import {
  CreateWarehouseRequestDto,
  CreateWarehouseResponseDto,
  UpdateWarehouseRequestDto,
  UpdateWarehouseResponseDto,
  PatchWarehouseRequestDto,
  PatchWarehouseResponseDto,
  GetWarehouseResponseDto,
} from './dto/dto';
import { IWarehouse } from '../../models/warehouse.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IWarehouse> = {
  create: {
    request: CreateWarehouseRequestDto,
    response: CreateWarehouseResponseDto,
  },
  update: {
    request: UpdateWarehouseRequestDto,
    response: UpdateWarehouseResponseDto,
  },
  get: {
    request: undefined,
    response: GetWarehouseResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetWarehouseResponseDto,
  },
  patch: {
    request: PatchWarehouseRequestDto,
    response: PatchWarehouseResponseDto,
  },
};
