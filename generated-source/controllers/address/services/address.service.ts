import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IAddress } from '../../../models/address.entity-model';
import { AddressEntitySchema } from '../../../entities/address.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService
  extends BaseEntityService<IAddress>
  implements IEntityService<IAddress>
{
  constructor(
    @InjectRepository(AddressEntitySchema)
    private entityRepository: Repository<IAddress>,
  ) {
    super(entityRepository, {});
  }
}
