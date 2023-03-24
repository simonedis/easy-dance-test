import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { UserToClubFollowerService } from './services/user-to-club-follower.service';
import { Controller } from '@nestjs/common';
import { IUserToClubFollower } from '../../models/user-to-club-follower.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './user-to-club-follower.config';

@ApiTags('userToClubFollower')
@Controller('user-to-club-followers')
export class UserToClubFollowerController
  extends CreateCrudController(config)<IUserToClubFollower>
  implements IEntityController<IUserToClubFollower>
{
  constructor(public service: UserToClubFollowerService) {
    super(service);
  }
}
