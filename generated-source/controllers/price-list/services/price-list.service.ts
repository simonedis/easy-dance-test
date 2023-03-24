import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IPriceList } from '../../../models/price-list.entity-model';
import { PriceListEntitySchema } from '../../../entities/price-list.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceListService
  extends BaseEntityService<IPriceList>
  implements IEntityService<IPriceList>
{
  constructor(
    @InjectRepository(PriceListEntitySchema)
    private entityRepository: Repository<IPriceList>,
  ) {
    super(entityRepository, {});
  }
}
