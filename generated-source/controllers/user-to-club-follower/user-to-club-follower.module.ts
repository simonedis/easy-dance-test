import { Module } from '@nestjs/common';
import { UserToClubFollowerController } from './user-to-club-follower.controller';
import { UserToClubFollowerService } from './services/user-to-club-follower.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserToClubFollowerEntitySchema } from '../../entities/user-to-club-follower.entity-schema';

@Module({
  controllers: [UserToClubFollowerController],
  providers: [UserToClubFollowerService],
  exports: [UserToClubFollowerService],
  imports: [TypeOrmModule.forFeature([UserToClubFollowerEntitySchema])],
})
export class UserToClubFollowerModule {}
