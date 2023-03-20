import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PriveService } from './services/prive.service';
import { Controller } from '@nestjs/common';
import { IPrive } from '../../models/prive.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './prive.config';

@ApiTags('prive')
@Controller('prives')
export class PriveController
  extends CreateCrudController(config)<IPrive>
  implements IEntityController<IPrive>
{
  constructor(public service: PriveService) {
    super(service);
  }
}
