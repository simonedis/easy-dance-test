import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { WarehouseService } from './services/warehouse.service';
import { Controller } from '@nestjs/common';
import { IWarehouse } from '../../models/warehouse.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './warehouse.config';

@ApiTags('warehouse')
@Controller('warehouses')
export class WarehouseController
  extends CreateCrudController(config)<IWarehouse>
  implements IEntityController<IWarehouse>
{
  constructor(public service: WarehouseService) {
    super(service);
  }
}
