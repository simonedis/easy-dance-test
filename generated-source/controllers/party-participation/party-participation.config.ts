import {
  CreatePartyParticipationRequestDto,
  CreatePartyParticipationResponseDto,
  UpdatePartyParticipationRequestDto,
  UpdatePartyParticipationResponseDto,
  PatchPartyParticipationRequestDto,
  PatchPartyParticipationResponseDto,
  GetPartyParticipationResponseDto,
} from './dto/dto';
import { IPartyParticipation } from '../../models/party-participation.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IPartyParticipation> = {
  create: {
    request: CreatePartyParticipationRequestDto,
    response: CreatePartyParticipationResponseDto,
  },
  update: {
    request: UpdatePartyParticipationRequestDto,
    response: UpdatePartyParticipationResponseDto,
  },
  get: {
    request: undefined,
    response: GetPartyParticipationResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPartyParticipationResponseDto,
  },
  patch: {
    request: PatchPartyParticipationRequestDto,
    response: PatchPartyParticipationResponseDto,
  },
};
