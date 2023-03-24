import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PriveOrderRowService } from './services/prive-order-row.service';
import { Controller } from '@nestjs/common';
import { IPriveOrderRow } from '../../models/prive-order-row.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './prive-order-row.config';

@ApiTags('priveOrderRow')
@Controller('prive-order-rows')
export class PriveOrderRowController
  extends CreateCrudController(config)<IPriveOrderRow>
  implements IEntityController<IPriveOrderRow>
{
  constructor(public service: PriveOrderRowService) {
    super(service);
  }
}
