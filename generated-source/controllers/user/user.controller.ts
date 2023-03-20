import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { UserService } from './services/user.service';
import { Controller } from '@nestjs/common';
import { IUser } from '../../models/user.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './user.config';

@ApiTags('user')
@Controller('users')
export class UserController
  extends CreateCrudController(config)<IUser>
  implements IEntityController<IUser>
{
  constructor(public service: UserService) {
    super(service);
  }
}
