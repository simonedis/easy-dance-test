import { Module } from '@nestjs/common';
import { PartyParticipationController } from './party-participation.controller';
import { PartyParticipationService } from './services/party-participation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartyParticipationEntitySchema } from '../../entities/party-participation.entity-schema';

@Module({
  controllers: [PartyParticipationController],
  providers: [PartyParticipationService],
  exports: [PartyParticipationService],
  imports: [TypeOrmModule.forFeature([PartyParticipationEntitySchema])],
})
export class PartyParticipationModule {}
