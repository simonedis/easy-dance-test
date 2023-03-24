import {
  CreatePriveOrderRowRequestDto,
  CreatePriveOrderRowResponseDto,
  UpdatePriveOrderRowRequestDto,
  UpdatePriveOrderRowResponseDto,
  PatchPriveOrderRowRequestDto,
  PatchPriveOrderRowResponseDto,
  GetPriveOrderRowResponseDto,
} from './dto/dto';
import { IPriveOrderRow } from '../../models/prive-order-row.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IPriveOrderRow> = {
  create: {
    request: CreatePriveOrderRowRequestDto,
    response: CreatePriveOrderRowResponseDto,
  },
  update: {
    request: UpdatePriveOrderRowRequestDto,
    response: UpdatePriveOrderRowResponseDto,
  },
  get: {
    request: undefined,
    response: GetPriveOrderRowResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPriveOrderRowResponseDto,
  },
  patch: {
    request: PatchPriveOrderRowRequestDto,
    response: PatchPriveOrderRowResponseDto,
  },
};
