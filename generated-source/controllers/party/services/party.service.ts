import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IParty } from '../../../models/party.entity-model';
import { PartyEntitySchema } from '../../../entities/party.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyService
  extends BaseEntityService<IParty>
  implements IEntityService<IParty>
{
  constructor(
    @InjectRepository(PartyEntitySchema)
    private entityRepository: Repository<IParty>,
  ) {
    super(entityRepository, {});
  }
}
