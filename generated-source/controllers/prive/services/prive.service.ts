import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IPrive } from '../../../models/prive.entity-model';
import { PriveEntitySchema } from '../../../entities/prive.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriveService
  extends BaseEntityService<IPrive>
  implements IEntityService<IPrive>
{
  constructor(
    @InjectRepository(PriveEntitySchema)
    private entityRepository: Repository<IPrive>,
  ) {
    super(entityRepository, {});
  }
}
