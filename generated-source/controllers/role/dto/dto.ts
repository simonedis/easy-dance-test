import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IRole } from '../../../models/role.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
export class RoleBaseDto implements IRole {
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

  @ApiPropertyExt({ maxLength: 100, type: String })
  name: string;

  @ApiPropertyExt({ type: () => UserBaseDto, isArray: true })
  users?: IUser[];
}

export class CreateRoleRequestDto extends RoleBaseDto {}

export class CreateRoleResponseDto extends RoleBaseDto {}

export class UpdateRoleRequestDto extends RoleBaseDto {}

export class UpdateRoleResponseDto extends RoleBaseDto {}

export class PatchRoleRequestDto extends RoleBaseDto {}

export class PatchRoleResponseDto extends RoleBaseDto {}

export class FilterRoleRequestDto extends RoleBaseDto {}

export class GetRoleResponseDto extends RoleBaseDto {}
