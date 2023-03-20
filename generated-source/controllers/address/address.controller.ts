import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { AddressService } from './services/address.service';
import { Controller } from '@nestjs/common';
import { IAddress } from '../../models/address.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './address.config';

@ApiTags('address')
@Controller('addresses')
export class AddressController
  extends CreateCrudController(config)<IAddress>
  implements IEntityController<IAddress>
{
  constructor(public service: AddressService) {
    super(service);
  }
}
