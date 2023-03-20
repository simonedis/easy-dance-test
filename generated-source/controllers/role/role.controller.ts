import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { RoleService } from './services/role.service';
import { Controller } from '@nestjs/common';
import { IRole } from '../../models/role.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './role.config';

@ApiTags('role')
@Controller('roles')
export class RoleController
  extends CreateCrudController(config)<IRole>
  implements IEntityController<IRole>
{
  constructor(public service: RoleService) {
    super(service);
  }
}
