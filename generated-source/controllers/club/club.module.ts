import { Module } from '@nestjs/common';
import { ClubController } from './club.controller';
import { ClubService } from './services/club.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubEntitySchema } from '../../entities/club.entity-schema';

@Module({
  controllers: [ClubController],
  providers: [ClubService],
  exports: [ClubService],
  imports: [TypeOrmModule.forFeature([ClubEntitySchema])],
})
export class ClubModule {}
