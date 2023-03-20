import {
  CreatePriveOrderRequestDto,
  CreatePriveOrderResponseDto,
  UpdatePriveOrderRequestDto,
  UpdatePriveOrderResponseDto,
  PatchPriveOrderRequestDto,
  PatchPriveOrderResponseDto,
  GetPriveOrderResponseDto,
} from './dto/dto';
import { IPriveOrder } from '../../models/prive-order.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IPriveOrder> = {
  create: {
    request: CreatePriveOrderRequestDto,
    response: CreatePriveOrderResponseDto,
  },
  update: {
    request: UpdatePriveOrderRequestDto,
    response: UpdatePriveOrderResponseDto,
  },
  get: {
    request: undefined,
    response: GetPriveOrderResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPriveOrderResponseDto,
  },
  patch: {
    request: PatchPriveOrderRequestDto,
    response: PatchPriveOrderResponseDto,
  },
};
