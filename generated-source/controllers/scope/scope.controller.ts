import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { ScopeService } from './services/scope.service';
import { Controller } from '@nestjs/common';
import { IScope } from '../../models/scope.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './scope.config';

@ApiTags('scope')
@Controller('scopes')
export class ScopeController
  extends CreateCrudController(config)<IScope>
  implements IEntityController<IScope>
{
  constructor(public service: ScopeService) {
    super(service);
  }
}
