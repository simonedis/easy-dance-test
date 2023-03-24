import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { UserToUserFollowerService } from './services/user-to-user-follower.service';
import { Controller } from '@nestjs/common';
import { IUserToUserFollower } from '../../models/user-to-user-follower.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './user-to-user-follower.config';

@ApiTags('userToUserFollower')
@Controller('user-to-user-followers')
export class UserToUserFollowerController
  extends CreateCrudController(config)<IUserToUserFollower>
  implements IEntityController<IUserToUserFollower>
{
  constructor(public service: UserToUserFollowerService) {
    super(service);
  }
}
