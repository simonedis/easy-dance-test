import {
  CreatePriceListRequestDto,
  CreatePriceListResponseDto,
  UpdatePriceListRequestDto,
  UpdatePriceListResponseDto,
  PatchPriceListRequestDto,
  PatchPriceListResponseDto,
  GetPriceListResponseDto,
} from './dto/dto';
import { IPriceList } from '../../models/price-list.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IPriceList> = {
  create: {
    request: CreatePriceListRequestDto,
    response: CreatePriceListResponseDto,
  },
  update: {
    request: UpdatePriceListRequestDto,
    response: UpdatePriceListResponseDto,
  },
  get: {
    request: undefined,
    response: GetPriceListResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPriceListResponseDto,
  },
  patch: {
    request: PatchPriceListRequestDto,
    response: PatchPriceListResponseDto,
  },
};
