import {
  CreatePriveCategoryRequestDto,
  CreatePriveCategoryResponseDto,
  UpdatePriveCategoryRequestDto,
  UpdatePriveCategoryResponseDto,
  PatchPriveCategoryRequestDto,
  PatchPriveCategoryResponseDto,
  GetPriveCategoryResponseDto,
} from './dto/dto';
import { IPriveCategory } from '../../models/prive-category.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IPriveCategory> = {
  create: {
    request: CreatePriveCategoryRequestDto,
    response: CreatePriveCategoryResponseDto,
  },
  update: {
    request: UpdatePriveCategoryRequestDto,
    response: UpdatePriveCategoryResponseDto,
  },
  get: {
    request: undefined,
    response: GetPriveCategoryResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPriveCategoryResponseDto,
  },
  patch: {
    request: PatchPriveCategoryRequestDto,
    response: PatchPriveCategoryResponseDto,
  },
};
