import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IPriveOrderRow } from '../../../models/prive-order-row.entity-model';
import { PriveOrderRowEntitySchema } from '../../../entities/prive-order-row.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriveOrderRowService
  extends BaseEntityService<IPriveOrderRow>
  implements IEntityService<IPriveOrderRow>
{
  constructor(
    @InjectRepository(PriveOrderRowEntitySchema)
    private entityRepository: Repository<IPriveOrderRow>,
  ) {
    super(entityRepository, {});
  }
}
