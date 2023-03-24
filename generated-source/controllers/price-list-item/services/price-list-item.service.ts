import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IPriceListItem } from '../../../models/price-list-item.entity-model';
import { PriceListItemEntitySchema } from '../../../entities/price-list-item.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceListItemService
  extends BaseEntityService<IPriceListItem>
  implements IEntityService<IPriceListItem>
{
  constructor(
    @InjectRepository(PriceListItemEntitySchema)
    private entityRepository: Repository<IPriceListItem>,
  ) {
    super(entityRepository, {});
  }
}
