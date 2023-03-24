import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IPriveCategory } from '../../../models/prive-category.entity-model';
import { PriveCategoryEntitySchema } from '../../../entities/prive-category.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriveCategoryService
  extends BaseEntityService<IPriveCategory>
  implements IEntityService<IPriveCategory>
{
  constructor(
    @InjectRepository(PriveCategoryEntitySchema)
    private entityRepository: Repository<IPriveCategory>,
  ) {
    super(entityRepository, {});
  }
}
