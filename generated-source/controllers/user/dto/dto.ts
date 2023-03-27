import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IUser } from '../../../models/user.entity-model';
import { IRole } from '../../../models/role.entity-model';
import { IUserToUserFollower } from '../../../models/user-to-user-follower.entity-model';
import { IUserToClubFollower } from '../../../models/user-to-club-follower.entity-model';
import { IClub } from '../../../models/club.entity-model';
import { RoleBaseDto } from '../../role/dto/dto';
import { UserToUserFollowerBaseDto } from '../../user-to-user-follower/dto/dto';
import { UserToClubFollowerBaseDto } from '../../user-to-club-follower/dto/dto';
import { ClubBaseDto } from '../../club/dto/dto';

export class UserBaseDto implements IUser {
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

  @ApiPropertyExt({ minLength: 4, type: String, nullable: false })
  username: string;

  @ApiPropertyExt({ type: String, minLength: 5 })
  email: string;

  @ApiPropertyExt({ type: String })
  password: string;

  @ApiPropertyExt({ type: () => RoleBaseDto, isArray: true })
  roles?: IRole[];

  @ApiPropertyExt({ type: () => UserToUserFollowerBaseDto, isArray: true })
  followers?: IUserToUserFollower[];

  @ApiPropertyExt({ type: () => UserToUserFollowerBaseDto, isArray: true })
  followings?: IUserToUserFollower[];

  @ApiPropertyExt({ type: () => UserToClubFollowerBaseDto, isArray: true })
  followingClubs?: IUserToClubFollower[];

  @ApiPropertyExt({ type: () => ClubBaseDto, isArray: false })
  club?: IClub;
  type: number;
}

enum names {
  simone = 'simone',
  martina = 'martina',
}
export class CreateUserRequestDto extends UserBaseDto {
  @ApiPropertyExt({ type: String, minLength: 5, required: true })
  email: string;
}

export class CreateUserResponseDto extends UserBaseDto {}

export class UpdateUserRequestDto extends UserBaseDto {}

export class UpdateUserResponseDto extends UserBaseDto {}

export class PatchUserRequestDto extends UserBaseDto {}

export class PatchUserResponseDto extends UserBaseDto {}

export class FilterUserRequestDto extends UserBaseDto {}

export class GetUserResponseDto extends UserBaseDto {}
