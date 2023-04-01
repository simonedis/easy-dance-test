import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IUserToUserFollower } from '../../../models/user-to-user-follower.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
export class UserToUserFollowerBaseDto implements IUserToUserFollower {
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
  follower?: IUser;

  @ApiPropertyExt({ type: () => UserBaseDto, isArray: false })
  followed?: IUser;
}

export class CreateUserToUserFollowerRequestDto extends UserToUserFollowerBaseDto {}

export class CreateUserToUserFollowerResponseDto extends UserToUserFollowerBaseDto {}

export class UpdateUserToUserFollowerRequestDto extends UserToUserFollowerBaseDto {}

export class UpdateUserToUserFollowerResponseDto extends UserToUserFollowerBaseDto {}

export class PatchUserToUserFollowerRequestDto extends UserToUserFollowerBaseDto {}

export class PatchUserToUserFollowerResponseDto extends UserToUserFollowerBaseDto {}

export class FilterUserToUserFollowerRequestDto extends UserToUserFollowerBaseDto {}

export class GetUserToUserFollowerResponseDto extends UserToUserFollowerBaseDto {}
