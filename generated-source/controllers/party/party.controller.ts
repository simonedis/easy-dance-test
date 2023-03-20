import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PartyService } from './services/party.service';
import { Controller } from '@nestjs/common';
import { IParty } from '../../models/party.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './party.config';

@ApiTags('party')
@Controller('parties')
export class PartyController
  extends CreateCrudController(config)<IParty>
  implements IEntityController<IParty>
{
  constructor(public service: PartyService) {
    super(service);
  }
}
