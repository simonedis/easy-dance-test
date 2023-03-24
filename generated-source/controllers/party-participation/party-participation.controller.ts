import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PartyParticipationService } from './services/party-participation.service';
import { Controller } from '@nestjs/common';
import { IPartyParticipation } from '../../models/party-participation.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './party-participation.config';

@ApiTags('partyParticipation')
@Controller('party-participations')
export class PartyParticipationController
  extends CreateCrudController(config)<IPartyParticipation>
  implements IEntityController<IPartyParticipation>
{
  constructor(public service: PartyParticipationService) {
    super(service);
  }
}
