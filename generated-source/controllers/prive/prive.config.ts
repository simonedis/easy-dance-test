import {
  CreatePriveRequestDto,
  CreatePriveResponseDto,
  UpdatePriveRequestDto,
  UpdatePriveResponseDto,
  PatchPriveRequestDto,
  PatchPriveResponseDto,
  GetPriveResponseDto,
} from './dto/dto';
import { IPrive } from '../../models/prive.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IPrive> = {
  create: {
    request: CreatePriveRequestDto,
    response: CreatePriveResponseDto,
  },
  update: {
    request: UpdatePriveRequestDto,
    response: UpdatePriveResponseDto,
  },
  get: {
    request: undefined,
    response: GetPriveResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPriveResponseDto,
  },
  patch: {
    request: PatchPriveRequestDto,
    response: PatchPriveResponseDto,
  },
};
