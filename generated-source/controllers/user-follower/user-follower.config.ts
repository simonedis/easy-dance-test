import {
  CreateUserFollowerRequestDto,
  CreateUserFollowerResponseDto,
  UpdateUserFollowerRequestDto,
  UpdateUserFollowerResponseDto,
  PatchUserFollowerRequestDto,
  PatchUserFollowerResponseDto,
  GetUserFollowerResponseDto,
} from './dto/dto';
import { IUserFollower } from '../../models/user-follower.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IUserFollower> = {
  create: {
    request: CreateUserFollowerRequestDto,
    response: CreateUserFollowerResponseDto,
  },
  update: {
    request: UpdateUserFollowerRequestDto,
    response: UpdateUserFollowerResponseDto,
  },
  get: {
    request: undefined,
    response: GetUserFollowerResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetUserFollowerResponseDto,
  },
  patch: {
    request: PatchUserFollowerRequestDto,
    response: PatchUserFollowerResponseDto,
  },
};
