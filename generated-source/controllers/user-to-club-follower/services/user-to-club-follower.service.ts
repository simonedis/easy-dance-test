import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IUserToClubFollower } from '../../../models/user-to-club-follower.entity-model';
import { UserToClubFollowerEntitySchema } from '../../../entities/user-to-club-follower.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserToClubFollowerService
  extends BaseEntityService<IUserToClubFollower>
  implements IEntityService<IUserToClubFollower>
{
  constructor(
    @InjectRepository(UserToClubFollowerEntitySchema)
    private entityRepository: Repository<IUserToClubFollower>,
  ) {
    super(entityRepository, {});
  }
}
