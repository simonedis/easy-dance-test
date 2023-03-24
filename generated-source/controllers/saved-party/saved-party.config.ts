import {
  CreateSavedPartyRequestDto,
  CreateSavedPartyResponseDto,
  UpdateSavedPartyRequestDto,
  UpdateSavedPartyResponseDto,
  PatchSavedPartyRequestDto,
  PatchSavedPartyResponseDto,
  GetSavedPartyResponseDto,
} from './dto/dto';
import { ISavedParty } from '../../models/saved-party.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<ISavedParty> = {
  create: {
    request: CreateSavedPartyRequestDto,
    response: CreateSavedPartyResponseDto,
  },
  update: {
    request: UpdateSavedPartyRequestDto,
    response: UpdateSavedPartyResponseDto,
  },
  get: {
    request: undefined,
    response: GetSavedPartyResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetSavedPartyResponseDto,
  },
  patch: {
    request: PatchSavedPartyRequestDto,
    response: PatchSavedPartyResponseDto,
  },
};
