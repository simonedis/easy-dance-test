import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IPriveOrder } from '../../../models/prive-order.entity-model';
import { PriveOrderEntitySchema } from '../../../entities/prive-order.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriveOrderService
  extends BaseEntityService<IPriveOrder>
  implements IEntityService<IPriveOrder>
{
  constructor(
    @InjectRepository(PriveOrderEntitySchema)
    private entityRepository: Repository<IPriveOrder>,
  ) {
    super(entityRepository, {});
  }
}
