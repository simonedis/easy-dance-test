import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { ClubService } from './services/club.service';
import { Controller } from '@nestjs/common';
import { IClub } from '../../models/club.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './club.config';

@ApiTags('club')
@Controller('clubs')
export class ClubController
  extends CreateCrudController(config)<IClub>
  implements IEntityController<IClub>
{
  constructor(public service: ClubService) {
    super(service);
  }
}
