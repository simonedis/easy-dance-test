import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IClubFollower } from '../../../models/club-follower.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { IClub } from '../../../models/club.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
import { ClubBaseDto } from '../../club/dto/dto';
export class ClubFollowerBaseDto implements IClubFollower {
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
