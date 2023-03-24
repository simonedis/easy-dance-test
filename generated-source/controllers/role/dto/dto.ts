import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IRole } from '../../../models/role.entity-model';
import { IScope } from '../../../models/scope.entity-model';
import { ScopeBaseDto } from '../../scope/dto/dto';
export class RoleBaseDto implements IRole {
  @ApiPropertyExt({ maxLength: 100, type: String })
  name: string;

  @ApiPropertyExt({ type: () => ScopeBaseDto, isArray: true })
  scopes?: IScope[];
}

export class CreateRoleRequestDto extends RoleBaseDto {}

export class CreateRoleResponseDto extends RoleBaseDto {}

export class UpdateRoleRequestDto extends RoleBaseDto {}

export class UpdateRoleResponseDto extends RoleBaseDto {}

export class PatchRoleRequestDto extends RoleBaseDto {}

export class PatchRoleResponseDto extends RoleBaseDto {}

export class FilterRoleRequestDto extends RoleBaseDto {}

export class GetRoleResponseDto extends RoleBaseDto {}
