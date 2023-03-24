import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IUserToUserFollower } from '../../../models/user-to-user-follower.entity-model';
import { UserToUserFollowerEntitySchema } from '../../../entities/user-to-user-follower.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserToUserFollowerService
  extends BaseEntityService<IUserToUserFollower>
  implements IEntityService<IUserToUserFollower>
{
  constructor(
    @InjectRepository(UserToUserFollowerEntitySchema)
    private entityRepository: Repository<IUserToUserFollower>,
  ) {
    super(entityRepository, {});
  }
}
