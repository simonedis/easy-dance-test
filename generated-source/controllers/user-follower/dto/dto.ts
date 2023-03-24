import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IUserFollower } from '../../../models/user-follower.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
export class UserFollowerBaseDto implements IUserFollower {
  @ApiPropertyExt({ type: () => UserBaseDto, isArray: false })
  follower?: IUser;

  @ApiPropertyExt({ type: () => UserBaseDto, isArray: false })
  followed?: IUser;
}

export class CreateUserFollowerRequestDto extends UserFollowerBaseDto {}

export class CreateUserFollowerResponseDto extends UserFollowerBaseDto {}

export class UpdateUserFollowerRequestDto extends UserFollowerBaseDto {}

export class UpdateUserFollowerResponseDto extends UserFollowerBaseDto {}

export class PatchUserFollowerRequestDto extends UserFollowerBaseDto {}

export class PatchUserFollowerResponseDto extends UserFollowerBaseDto {}

export class FilterUserFollowerRequestDto extends UserFollowerBaseDto {}

export class GetUserFollowerResponseDto extends UserFollowerBaseDto {}
