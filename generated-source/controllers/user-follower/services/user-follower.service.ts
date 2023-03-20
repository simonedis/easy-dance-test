import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IUserFollower } from '../../../models/user-follower.entity-model';
import { UserFollowerEntitySchema } from '../../../entities/user-follower.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserFollowerService
  extends BaseEntityService<IUserFollower>
  implements IEntityService<IUserFollower>
{
  constructor(
    @InjectRepository(UserFollowerEntitySchema)
    private entityRepository: Repository<IUserFollower>,
  ) {
    super(entityRepository, {});
  }
}
