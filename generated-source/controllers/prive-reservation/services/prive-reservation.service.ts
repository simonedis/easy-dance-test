import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IPriveReservation } from '../../../models/prive-reservation.entity-model';
import { PriveReservationEntitySchema } from '../../../entities/prive-reservation.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriveReservationService
  extends BaseEntityService<IPriveReservation>
  implements IEntityService<IPriveReservation>
{
  constructor(
    @InjectRepository(PriveReservationEntitySchema)
    private entityRepository: Repository<IPriveReservation>,
  ) {
    super(entityRepository, {});
  }
}
