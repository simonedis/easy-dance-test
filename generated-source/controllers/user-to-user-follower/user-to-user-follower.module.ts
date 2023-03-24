import { Module } from '@nestjs/common';
import { UserToUserFollowerController } from './user-to-user-follower.controller';
import { UserToUserFollowerService } from './services/user-to-user-follower.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserToUserFollowerEntitySchema } from '../../entities/user-to-user-follower.entity-schema';

@Module({
  controllers: [UserToUserFollowerController],
  providers: [UserToUserFollowerService],
  exports: [UserToUserFollowerService],
  imports: [TypeOrmModule.forFeature([UserToUserFollowerEntitySchema])],
})
export class UserToUserFollowerModule {}
