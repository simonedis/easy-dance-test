import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IUserToClubFollower } from '../../../models/user-to-club-follower.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { IClub } from '../../../models/club.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
import { ClubBaseDto } from '../../club/dto/dto';
export class UserToClubFollowerBaseDto implements IUserToClubFollower {
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

  @ApiPropertyExt({ type: () => ClubBaseDto, isArray: false })
  club?: IClub;
}

export class CreateUserToClubFollowerRequestDto extends UserToClubFollowerBaseDto {}

export class CreateUserToClubFollowerResponseDto extends UserToClubFollowerBaseDto {}

export class UpdateUserToClubFollowerRequestDto extends UserToClubFollowerBaseDto {}

export class UpdateUserToClubFollowerResponseDto extends UserToClubFollowerBaseDto {}

export class PatchUserToClubFollowerRequestDto extends UserToClubFollowerBaseDto {}

export class PatchUserToClubFollowerResponseDto extends UserToClubFollowerBaseDto {}

export class FilterUserToClubFollowerRequestDto extends UserToClubFollowerBaseDto {}

export class GetUserToClubFollowerResponseDto extends UserToClubFollowerBaseDto {}
