import {
  CreatePartyRequestDto,
  CreatePartyResponseDto,
  UpdatePartyRequestDto,
  UpdatePartyResponseDto,
  PatchPartyRequestDto,
  PatchPartyResponseDto,
  GetPartyResponseDto,
} from './dto/dto';
import { IParty } from '../../models/party.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IParty> = {
  create: {
    request: CreatePartyRequestDto,
    response: CreatePartyResponseDto,
  },
  update: {
    request: UpdatePartyRequestDto,
    response: UpdatePartyResponseDto,
  },
  get: {
    request: undefined,
    response: GetPartyResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPartyResponseDto,
  },
  patch: {
    request: PatchPartyRequestDto,
    response: PatchPartyResponseDto,
  },
};
