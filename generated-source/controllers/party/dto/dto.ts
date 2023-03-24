import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IParty } from '../../../models/party.entity-model';
import { IClub } from '../../../models/club.entity-model';
import { IAddress } from '../../../models/address.entity-model';
import { ClubBaseDto } from '../../club/dto/dto';
import { AddressBaseDto } from '../../address/dto/dto';
export class PartyBaseDto implements IParty {
  @ApiPropertyExt({ type: String })
  title: string;

  @ApiPropertyExt({ type: Boolean })
  isWaitingList: string;

  @ApiPropertyExt({ type: Boolean })
  hidden: string;

  @ApiPropertyExt({ type: Number })
  from: string;

  @ApiPropertyExt({ type: Number })
  to: string;

  @ApiPropertyExt({ type: String })
  cover: string;

  @ApiPropertyExt({ type: () => ClubBaseDto, isArray: false })
  club?: IClub;

  @ApiPropertyExt({ type: () => AddressBaseDto, isArray: false })
  address?: IAddress;
}

export class CreatePartyRequestDto extends PartyBaseDto {}

export class CreatePartyResponseDto extends PartyBaseDto {}

export class UpdatePartyRequestDto extends PartyBaseDto {}

export class UpdatePartyResponseDto extends PartyBaseDto {}

export class PatchPartyRequestDto extends PartyBaseDto {}

export class PatchPartyResponseDto extends PartyBaseDto {}

export class FilterPartyRequestDto extends PartyBaseDto {}

export class GetPartyResponseDto extends PartyBaseDto {}
