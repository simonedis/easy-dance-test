import { Module } from '@nestjs/common';
import { UserFollowerController } from './user-follower.controller';
import { UserFollowerService } from './services/user-follower.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFollowerEntitySchema } from '../../entities/user-follower.entity-schema';

@Module({
  controllers: [UserFollowerController],
  providers: [UserFollowerService],
  exports: [UserFollowerService],
  imports: [TypeOrmModule.forFeature([UserFollowerEntitySchema])],
})
export class UserFollowerModule {}
