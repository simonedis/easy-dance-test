import {
  CreateProductRequestDto,
  CreateProductResponseDto,
  UpdateProductRequestDto,
  UpdateProductResponseDto,
  PatchProductRequestDto,
  PatchProductResponseDto,
  GetProductResponseDto,
} from './dto/dto';
import { IProduct } from '../../models/product.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IProduct> = {
  create: {
    request: CreateProductRequestDto,
    response: CreateProductResponseDto,
  },
  update: {
    request: UpdateProductRequestDto,
    response: UpdateProductResponseDto,
  },
  get: {
    request: undefined,
    response: GetProductResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetProductResponseDto,
  },
  patch: {
    request: PatchProductRequestDto,
    response: PatchProductResponseDto,
  },
};
