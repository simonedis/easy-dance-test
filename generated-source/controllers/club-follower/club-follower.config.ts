import {
  CreateClubFollowerRequestDto,
  CreateClubFollowerResponseDto,
  UpdateClubFollowerRequestDto,
  UpdateClubFollowerResponseDto,
  PatchClubFollowerRequestDto,
  PatchClubFollowerResponseDto,
  GetClubFollowerResponseDto,
} from './dto/dto';
import { IClubFollower } from '../../models/club-follower.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IClubFollower> = {
  create: {
    request: CreateClubFollowerRequestDto,
    response: CreateClubFollowerResponseDto,
  },
  update: {
    request: UpdateClubFollowerRequestDto,
    response: UpdateClubFollowerResponseDto,
  },
  get: {
    request: undefined,
    response: GetClubFollowerResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetClubFollowerResponseDto,
  },
  patch: {
    request: PatchClubFollowerRequestDto,
    response: PatchClubFollowerResponseDto,
  },
};
