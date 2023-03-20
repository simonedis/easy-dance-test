import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PriveOrderService } from './services/prive-order.service';
import { Controller } from '@nestjs/common';
import { IPriveOrder } from '../../models/prive-order.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './prive-order.config';

@ApiTags('priveOrder')
@Controller('prive-orders')
export class PriveOrderController
  extends CreateCrudController(config)<IPriveOrder>
  implements IEntityController<IPriveOrder>
{
  constructor(public service: PriveOrderService) {
    super(service);
  }
}
