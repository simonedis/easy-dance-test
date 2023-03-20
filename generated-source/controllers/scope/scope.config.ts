import {
  CreateScopeRequestDto,
  CreateScopeResponseDto,
  UpdateScopeRequestDto,
  UpdateScopeResponseDto,
  PatchScopeRequestDto,
  PatchScopeResponseDto,
  GetScopeResponseDto,
} from './dto/dto';
import { IScope } from '../../models/scope.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IScope> = {
  create: {
    request: CreateScopeRequestDto,
    response: CreateScopeResponseDto,
  },
  update: {
    request: UpdateScopeRequestDto,
    response: UpdateScopeResponseDto,
  },
  get: {
    request: undefined,
    response: GetScopeResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetScopeResponseDto,
  },
  patch: {
    request: PatchScopeRequestDto,
    response: PatchScopeResponseDto,
  },
};
