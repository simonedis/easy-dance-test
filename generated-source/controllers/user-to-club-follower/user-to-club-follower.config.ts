import {
  CreateUserToClubFollowerRequestDto,
  CreateUserToClubFollowerResponseDto,
  UpdateUserToClubFollowerRequestDto,
  UpdateUserToClubFollowerResponseDto,
  PatchUserToClubFollowerRequestDto,
  PatchUserToClubFollowerResponseDto,
  GetUserToClubFollowerResponseDto,
} from './dto/dto';
import { IUserToClubFollower } from '../../models/user-to-club-follower.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IUserToClubFollower> = {
  create: {
    request: CreateUserToClubFollowerRequestDto,
    response: CreateUserToClubFollowerResponseDto,
  },
  update: {
    request: UpdateUserToClubFollowerRequestDto,
    response: UpdateUserToClubFollowerResponseDto,
  },
  get: {
    request: undefined,
    response: GetUserToClubFollowerResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetUserToClubFollowerResponseDto,
  },
  patch: {
    request: PatchUserToClubFollowerRequestDto,
    response: PatchUserToClubFollowerResponseDto,
  },
};
