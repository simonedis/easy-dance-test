import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IClubFollower } from '../../../models/club-follower.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { IClub } from '../../../models/club.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
import { ClubBaseDto } from '../../club/dto/dto';
export class ClubFollowerBaseDto implements IClubFollower {
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
  createdBy?: string;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  updatedBy?: string;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  deletedBy?: string;

  @ApiPropertyExt({ type: () => UserBaseDto, isArray: false })
  user?: IUser;

  @ApiPropertyExt({ type: () => ClubBaseDto, isArray: false })
  club?: IClub;
}

export class CreateClubFollowerRequestDto extends ClubFollowerBaseDto {}

export class CreateClubFollowerResponseDto extends ClubFollowerBaseDto {}

export class UpdateClubFollowerRequestDto extends ClubFollowerBaseDto {}

export class UpdateClubFollowerResponseDto extends ClubFollowerBaseDto {}

export class PatchClubFollowerRequestDto extends ClubFollowerBaseDto {}

export class PatchClubFollowerResponseDto extends ClubFollowerBaseDto {}

export class FilterClubFollowerRequestDto extends ClubFollowerBaseDto {}

export class GetClubFollowerResponseDto extends ClubFollowerBaseDto {}
