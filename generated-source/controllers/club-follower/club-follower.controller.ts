import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { ClubFollowerService } from './services/club-follower.service';
import { Controller } from '@nestjs/common';
import { IClubFollower } from '../../models/club-follower.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './club-follower.config';

@ApiTags('clubFollower')
@Controller('club-followers')
export class ClubFollowerController
  extends CreateCrudController(config)<IClubFollower>
  implements IEntityController<IClubFollower>
{
  constructor(public service: ClubFollowerService) {
    super(service);
  }
}
