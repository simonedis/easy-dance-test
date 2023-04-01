import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPrivePartyRule } from '../../../models/prive-party-rule.entity-model';
import { IParty } from '../../../models/party.entity-model';
import { IPrive } from '../../../models/prive.entity-model';
import { PartyBaseDto } from '../../party/dto/dto';
import { PriveBaseDto } from '../../prive/dto/dto';
export class PrivePartyRuleBaseDto implements IPrivePartyRule {
  @ApiPropertyExt({ type: Number, required: false })
  id: number;

  @ApiPropertyExt({ type: String, required: false })
  uuid: string;

  @ApiPropertyExt({ type: Date, required: false })
  createdAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  updatedAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  deletedAt: Date;

  @ApiPropertyExt({ type: String, required: false, nullable: true })
  createdBy?: string;

  @ApiPropertyExt({ type: String, required: false, nullable: true })
  updatedBy?: string;

  @ApiPropertyExt({ type: String, required: false, nullable: true })
  deletedBy?: string;

  @ApiPropertyExt({ type: Number })
  minimumBill: number;

  @ApiPropertyExt({ type: () => PartyBaseDto, isArray: false })
  party?: IParty;

  @ApiPropertyExt({ type: () => PriveBaseDto, isArray: false })
  prive?: IPrive;
}

export class CreatePrivePartyRuleRequestDto extends PrivePartyRuleBaseDto {}

export class CreatePrivePartyRuleResponseDto extends PrivePartyRuleBaseDto {}

export class UpdatePrivePartyRuleRequestDto extends PrivePartyRuleBaseDto {}

export class UpdatePrivePartyRuleResponseDto extends PrivePartyRuleBaseDto {}

export class PatchPrivePartyRuleRequestDto extends PrivePartyRuleBaseDto {}

export class PatchPrivePartyRuleResponseDto extends PrivePartyRuleBaseDto {}

export class FilterPrivePartyRuleRequestDto extends PrivePartyRuleBaseDto {}

export class GetPrivePartyRuleResponseDto extends PrivePartyRuleBaseDto {}
