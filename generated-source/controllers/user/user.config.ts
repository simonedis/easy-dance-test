import {
  CreateUserRequestDto,
  CreateUserResponseDto,
  UpdateUserRequestDto,
  UpdateUserResponseDto,
  PatchUserRequestDto,
  PatchUserResponseDto,
  GetUserResponseDto,
} from './dto/dto';
import { IUser } from '../../models/user.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IUser> = {
  create: {
    request: CreateUserRequestDto,
    response: CreateUserResponseDto,
  },
  update: {
    request: UpdateUserRequestDto,
    response: UpdateUserResponseDto,
  },
  get: {
    request: undefined,
    response: GetUserResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetUserResponseDto,
  },
  patch: {
    request: PatchUserRequestDto,
    response: PatchUserResponseDto,
  },
};
