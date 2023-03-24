import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IPartyParticipation } from '../../../models/party-participation.entity-model';
import { PartyParticipationEntitySchema } from '../../../entities/party-participation.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PartyParticipationService
  extends BaseEntityService<IPartyParticipation>
  implements IEntityService<IPartyParticipation>
{
  constructor(
    @InjectRepository(PartyParticipationEntitySchema)
    private entityRepository: Repository<IPartyParticipation>,
  ) {
    super(entityRepository, {});
  }
}
