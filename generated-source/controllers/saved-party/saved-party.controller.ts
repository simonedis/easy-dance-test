import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { SavedPartyService } from './services/saved-party.service';
import { Controller } from '@nestjs/common';
import { ISavedParty } from '../../models/saved-party.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './saved-party.config';

@ApiTags('savedParty')
@Controller('saved-parties')
export class SavedPartyController
  extends CreateCrudController(config)<ISavedParty>
  implements IEntityController<ISavedParty>
{
  constructor(public service: SavedPartyService) {
    super(service);
  }
}
