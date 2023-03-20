import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IScope } from '../../../models/scope.entity-model';
import { ScopeEntitySchema } from '../../../entities/scope.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScopeService
  extends BaseEntityService<IScope>
  implements IEntityService<IScope>
{
  constructor(
    @InjectRepository(ScopeEntitySchema)
    private entityRepository: Repository<IScope>,
  ) {
    super(entityRepository, {});
  }
}
