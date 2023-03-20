import { Module } from '@nestjs/common';
import { PartyController } from './party.controller';
import { PartyService } from './services/party.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartyEntitySchema } from '../../entities/party.entity-schema';

@Module({
  controllers: [PartyController],
  providers: [PartyService],
  exports: [PartyService],
  imports: [TypeOrmModule.forFeature([PartyEntitySchema])],
})
export class PartyModule {}
