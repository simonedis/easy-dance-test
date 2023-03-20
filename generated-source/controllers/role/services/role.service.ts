import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IRole } from '../../../models/role.entity-model';
import { RoleEntitySchema } from '../../../entities/role.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleService
  extends BaseEntityService<IRole>
  implements IEntityService<IRole>
{
  constructor(
    @InjectRepository(RoleEntitySchema)
    private entityRepository: Repository<IRole>,
  ) {
    super(entityRepository, {});
  }
}
