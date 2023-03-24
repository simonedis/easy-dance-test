import { Module } from '@nestjs/common';
import { SavedPartyController } from './saved-party.controller';
import { SavedPartyService } from './services/saved-party.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SavedPartyEntitySchema } from '../../entities/saved-party.entity-schema';

@Module({
  controllers: [SavedPartyController],
  providers: [SavedPartyService],
  exports: [SavedPartyService],
  imports: [TypeOrmModule.forFeature([SavedPartyEntitySchema])],
})
export class SavedPartyModule {}
