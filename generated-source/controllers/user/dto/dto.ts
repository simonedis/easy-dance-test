import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IUser } from '../../../models/user.entity-model';

export class UserBaseDto implements IUser {
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

  @ApiPropertyExt({ minLength: 4, type: String, nullable: false })
  username: string;

  @ApiPropertyExt({ type: String })
  email: string;

  @ApiPropertyExt({ type: String, nullable: true })
  password?: string;

  @ApiPropertyExt({ type: String, required: true, nullable: false })
  firstName: string;

  @ApiPropertyExt({ type: String, required: true, nullable: false })
  lastName: string;

  @ApiPropertyExt({ type: Date, required: true, nullable: false })
  birthDate: Date;

  @ApiPropertyExt({ type: () => Number })
  role: number;
}

export class CreateUserRequestDto extends UserBaseDto {}

export class CreateUserResponseDto extends UserBaseDto {}

export class UpdateUserRequestDto extends UserBaseDto {}

export class UpdateUserResponseDto extends UserBaseDto {}

export class PatchUserRequestDto extends UserBaseDto {}

export class PatchUserResponseDto extends UserBaseDto {}

export class FilterUserRequestDto extends UserBaseDto {}

export class GetUserResponseDto extends UserBaseDto {}
