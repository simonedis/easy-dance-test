import {
  CreateRoleRequestDto,
  CreateRoleResponseDto,
  UpdateRoleRequestDto,
  UpdateRoleResponseDto,
  PatchRoleRequestDto,
  PatchRoleResponseDto,
  GetRoleResponseDto,
} from './dto/dto';
import { IRole } from '../../models/role.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IRole> = {
  create: {
    request: CreateRoleRequestDto,
    response: CreateRoleResponseDto,
  },
  update: {
    request: UpdateRoleRequestDto,
    response: UpdateRoleResponseDto,
  },
  get: {
    request: undefined,
    response: GetRoleResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetRoleResponseDto,
  },
  patch: {
    request: PatchRoleRequestDto,
    response: PatchRoleResponseDto,
  },
};
