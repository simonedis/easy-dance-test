import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { ISavedParty } from '../../../models/saved-party.entity-model';
import { SavedPartyEntitySchema } from '../../../entities/saved-party.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SavedPartyService
  extends BaseEntityService<ISavedParty>
  implements IEntityService<ISavedParty>
{
  constructor(
    @InjectRepository(SavedPartyEntitySchema)
    private entityRepository: Repository<ISavedParty>,
  ) {
    super(entityRepository, {});
  }
}
