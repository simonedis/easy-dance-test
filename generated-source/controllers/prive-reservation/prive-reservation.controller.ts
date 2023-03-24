import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PriveReservationService } from './services/prive-reservation.service';
import { Controller } from '@nestjs/common';
import { IPriveReservation } from '../../models/prive-reservation.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './prive-reservation.config';

@ApiTags('priveReservation')
@Controller('prive-reservations')
export class PriveReservationController
  extends CreateCrudController(config)<IPriveReservation>
  implements IEntityController<IPriveReservation>
{
  constructor(public service: PriveReservationService) {
    super(service);
  }
}
