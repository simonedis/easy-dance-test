import { Module } from '@nestjs/common';
import { PriveReservationController } from './prive-reservation.controller';
import { PriveReservationService } from './services/prive-reservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriveReservationEntitySchema } from '../../entities/prive-reservation.entity-schema';

@Module({
  controllers: [PriveReservationController],
  providers: [PriveReservationService],
  exports: [PriveReservationService],
  imports: [TypeOrmModule.forFeature([PriveReservationEntitySchema])],
})
export class PriveReservationModule {}
