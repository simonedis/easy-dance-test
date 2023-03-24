import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PriceListService } from './services/price-list.service';
import { Controller } from '@nestjs/common';
import { IPriceList } from '../../models/price-list.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './price-list.config';

@ApiTags('priceList')
@Controller('price-lists')
export class PriceListController
  extends CreateCrudController(config)<IPriceList>
  implements IEntityController<IPriceList>
{
  constructor(public service: PriceListService) {
    super(service);
  }
}
