import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IClubFollower } from '../../../models/club-follower.entity-model';
import { ClubFollowerEntitySchema } from '../../../entities/club-follower.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClubFollowerService
  extends BaseEntityService<IClubFollower>
  implements IEntityService<IClubFollower>
{
  constructor(
    @InjectRepository(ClubFollowerEntitySchema)
    private entityRepository: Repository<IClubFollower>,
  ) {
    super(entityRepository, {});
  }
}
