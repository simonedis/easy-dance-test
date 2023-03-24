import {
  CreatePrivePartyRuleRequestDto,
  CreatePrivePartyRuleResponseDto,
  UpdatePrivePartyRuleRequestDto,
  UpdatePrivePartyRuleResponseDto,
  PatchPrivePartyRuleRequestDto,
  PatchPrivePartyRuleResponseDto,
  GetPrivePartyRuleResponseDto,
} from './dto/dto';
import { IPrivePartyRule } from '../../models/prive-party-rule.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IPrivePartyRule> = {
  create: {
    request: CreatePrivePartyRuleRequestDto,
    response: CreatePrivePartyRuleResponseDto,
  },
  update: {
    request: UpdatePrivePartyRuleRequestDto,
    response: UpdatePrivePartyRuleResponseDto,
  },
  get: {
    request: undefined,
    response: GetPrivePartyRuleResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPrivePartyRuleResponseDto,
  },
  patch: {
    request: PatchPrivePartyRuleRequestDto,
    response: PatchPrivePartyRuleResponseDto,
  },
};
