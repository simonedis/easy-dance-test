import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PriceListItemService } from './services/price-list-item.service';
import { Controller } from '@nestjs/common';
import { IPriceListItem } from '../../models/price-list-item.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './price-list-item.config';

@ApiTags('priceListItem')
@Controller('price-list-items')
export class PriceListItemController
  extends CreateCrudController(config)<IPriceListItem>
  implements IEntityController<IPriceListItem>
{
  constructor(public service: PriceListItemService) {
    super(service);
  }
}
