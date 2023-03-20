import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IScope } from '../../../models/scope.entity-model';
import { IRole } from '../../../models/role.entity-model';
import { RoleBaseDto } from '../../role/dto/dto';
export class ScopeBaseDto implements IScope {
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

  @ApiPropertyExt({ type: String })
  name: string;

  @ApiPropertyExt({ type: () => RoleBaseDto, isArray: true })
  roles?: IRole[];
}

export class CreateScopeRequestDto extends ScopeBaseDto {}

export class CreateScopeResponseDto extends ScopeBaseDto {}

export class UpdateScopeRequestDto extends ScopeBaseDto {}

export class UpdateScopeResponseDto extends ScopeBaseDto {}

export class PatchScopeRequestDto extends ScopeBaseDto {}

export class PatchScopeResponseDto extends ScopeBaseDto {}

export class FilterScopeRequestDto extends ScopeBaseDto {}

export class GetScopeResponseDto extends ScopeBaseDto {}
