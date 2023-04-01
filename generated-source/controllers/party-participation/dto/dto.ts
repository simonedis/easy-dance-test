import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPartyParticipation } from '../../../models/party-participation.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { IParty } from '../../../models/party.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
import { PartyBaseDto } from '../../party/dto/dto';
export class PartyParticipationBaseDto implements IPartyParticipation {
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

  @ApiPropertyExt({ type: () => UserBaseDto, isArray: false })
  user?: IUser;

  @ApiPropertyExt({ type: () => PartyBaseDto, isArray: false })
  party?: IParty;
}

export class CreatePartyParticipationRequestDto extends PartyParticipationBaseDto {}

export class CreatePartyParticipationResponseDto extends PartyParticipationBaseDto {}

export class UpdatePartyParticipationRequestDto extends PartyParticipationBaseDto {}

export class UpdatePartyParticipationResponseDto extends PartyParticipationBaseDto {}

export class PatchPartyParticipationRequestDto extends PartyParticipationBaseDto {}

export class PatchPartyParticipationResponseDto extends PartyParticipationBaseDto {}

export class FilterPartyParticipationRequestDto extends PartyParticipationBaseDto {}

export class GetPartyParticipationResponseDto extends PartyParticipationBaseDto {}
