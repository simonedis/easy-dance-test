import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IClub } from '../../../models/club.entity-model';
import { ClubEntitySchema } from '../../../entities/club.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClubService
  extends BaseEntityService<IClub>
  implements IEntityService<IClub>
{
  constructor(
    @InjectRepository(ClubEntitySchema)
    private entityRepository: Repository<IClub>,
  ) {
    super(entityRepository, {});
  }
}
