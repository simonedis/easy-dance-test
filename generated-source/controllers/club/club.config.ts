import {
  CreateClubRequestDto,
  CreateClubResponseDto,
  UpdateClubRequestDto,
  UpdateClubResponseDto,
  PatchClubRequestDto,
  PatchClubResponseDto,
  GetClubResponseDto,
} from './dto/dto';
import { IClub } from '../../models/club.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IClub> = {
  create: {
    request: CreateClubRequestDto,
    response: CreateClubResponseDto,
  },
  update: {
    request: UpdateClubRequestDto,
    response: UpdateClubResponseDto,
  },
  get: {
    request: undefined,
    response: GetClubResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetClubResponseDto,
  },
  patch: {
    request: PatchClubRequestDto,
    response: PatchClubResponseDto,
  },
};
