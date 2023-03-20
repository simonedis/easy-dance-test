import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IUser } from '../../../models/user.entity-model';
import { UserEntitySchema } from '../../../entities/user.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService
  extends BaseEntityService<IUser>
  implements IEntityService<IUser>
{
  constructor(
    @InjectRepository(UserEntitySchema)
    private entityRepository: Repository<IUser>,
  ) {
    super(entityRepository, {});
  }
}
