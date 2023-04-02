import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { ISavedParty } from '../../../models/saved-party.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { IParty } from '../../../models/party.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
import { PartyBaseDto } from '../../party/dto/dto';
export class SavedPartyBaseDto implements ISavedParty {
  @ApiPropertyExt({ type: Number, required: false })
  id: number;

  @ApiPropertyExt({ type: Object, required: false })
  uuid: string;

  @ApiPropertyExt({ type: Date, required: false })
  createdAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  updatedAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  deletedAt: Date;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  createdBy?: any;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  updatedBy?: any;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  deletedBy?: any;

  @ApiPropertyExt({ type: () => UserBaseDto, isArray: false })
  user?: IUser;

  @ApiPropertyExt({ type: () => PartyBaseDto, isArray: false })
  party?: IParty;
}

export class CreateSavedPartyRequestDto extends SavedPartyBaseDto {}

export class CreateSavedPartyResponseDto extends SavedPartyBaseDto {}

export class UpdateSavedPartyRequestDto extends SavedPartyBaseDto {}

export class UpdateSavedPartyResponseDto extends SavedPartyBaseDto {}

export class PatchSavedPartyRequestDto extends SavedPartyBaseDto {}

export class PatchSavedPartyResponseDto extends SavedPartyBaseDto {}

export class FilterSavedPartyRequestDto extends SavedPartyBaseDto {}

export class GetSavedPartyResponseDto extends SavedPartyBaseDto {}
