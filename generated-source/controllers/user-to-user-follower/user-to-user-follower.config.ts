import {
  CreateUserToUserFollowerRequestDto,
  CreateUserToUserFollowerResponseDto,
  UpdateUserToUserFollowerRequestDto,
  UpdateUserToUserFollowerResponseDto,
  PatchUserToUserFollowerRequestDto,
  PatchUserToUserFollowerResponseDto,
  GetUserToUserFollowerResponseDto,
} from './dto/dto';
import { IUserToUserFollower } from '../../models/user-to-user-follower.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IUserToUserFollower> = {
  create: {
    request: CreateUserToUserFollowerRequestDto,
    response: CreateUserToUserFollowerResponseDto,
  },
  update: {
    request: UpdateUserToUserFollowerRequestDto,
    response: UpdateUserToUserFollowerResponseDto,
  },
  get: {
    request: undefined,
    response: GetUserToUserFollowerResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetUserToUserFollowerResponseDto,
  },
  patch: {
    request: PatchUserToUserFollowerRequestDto,
    response: PatchUserToUserFollowerResponseDto,
  },
};
