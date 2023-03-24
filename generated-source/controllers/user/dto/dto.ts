import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IUser } from '../../../models/user.entity-model';
import { IUserFollower } from '../../../models/user-follower.entity-model';
import { IClub } from '../../../models/club.entity-model';
import { UserFollowerBaseDto } from '../../user-follower/dto/dto';
import { ClubBaseDto } from '../../club/dto/dto';
export class UserBaseDto implements IUser {
  @ApiPropertyExt({ minLength: 4, type: String, nullable: false })
  username: string;

  @ApiPropertyExt({ type: String })
  email: string;

  @ApiPropertyExt({ type: String })
  password: string;

  @ApiPropertyExt({ type: () => UserFollowerBaseDto, isArray: true })
  followers?: IUserFollower[];

  @ApiPropertyExt({ type: () => UserFollowerBaseDto, isArray: true })
  followings?: IUserFollower[];

  @ApiPropertyExt({ type: () => ClubBaseDto, isArray: false })
  club?: IClub;
}

export class CreateUserRequestDto extends UserBaseDto {}

export class CreateUserResponseDto extends UserBaseDto {}

export class UpdateUserRequestDto extends UserBaseDto {}

export class UpdateUserResponseDto extends UserBaseDto {}

export class PatchUserRequestDto extends UserBaseDto {}

export class PatchUserResponseDto extends UserBaseDto {}

export class FilterUserRequestDto extends UserBaseDto {}

export class GetUserResponseDto extends UserBaseDto {}
