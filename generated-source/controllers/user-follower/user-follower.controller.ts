import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { UserFollowerService } from './services/user-follower.service';
import { Controller } from '@nestjs/common';
import { IUserFollower } from '../../models/user-follower.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './user-follower.config';

@ApiTags('userFollower')
@Controller('user-followers')
export class UserFollowerController
  extends CreateCrudController(config)<IUserFollower>
  implements IEntityController<IUserFollower>
{
  constructor(public service: UserFollowerService) {
    super(service);
  }
}
