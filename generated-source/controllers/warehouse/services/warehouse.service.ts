import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IWarehouse } from '../../../models/warehouse.entity-model';
import { WarehouseEntitySchema } from '../../../entities/warehouse.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WarehouseService
  extends BaseEntityService<IWarehouse>
  implements IEntityService<IWarehouse>
{
  constructor(
    @InjectRepository(WarehouseEntitySchema)
    private entityRepository: Repository<IWarehouse>,
  ) {
    super(entityRepository, {});
  }
}
