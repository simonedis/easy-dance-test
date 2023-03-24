import {
  CreatePriceListItemRequestDto,
  CreatePriceListItemResponseDto,
  UpdatePriceListItemRequestDto,
  UpdatePriceListItemResponseDto,
  PatchPriceListItemRequestDto,
  PatchPriceListItemResponseDto,
  GetPriceListItemResponseDto,
} from './dto/dto';
import { IPriceListItem } from '../../models/price-list-item.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IPriceListItem> = {
  create: {
    request: CreatePriceListItemRequestDto,
    response: CreatePriceListItemResponseDto,
  },
  update: {
    request: UpdatePriceListItemRequestDto,
    response: UpdatePriceListItemResponseDto,
  },
  get: {
    request: undefined,
    response: GetPriceListItemResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPriceListItemResponseDto,
  },
  patch: {
    request: PatchPriceListItemRequestDto,
    response: PatchPriceListItemResponseDto,
  },
};
