import { Module } from '@nestjs/common';
import { ClubFollowerController } from './club-follower.controller';
import { ClubFollowerService } from './services/club-follower.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubFollowerEntitySchema } from '../../entities/club-follower.entity-schema';

@Module({
  controllers: [ClubFollowerController],
  providers: [ClubFollowerService],
  exports: [ClubFollowerService],
  imports: [TypeOrmModule.forFeature([ClubFollowerEntitySchema])],
})
export class ClubFollowerModule {}
