import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './services/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntitySchema } from '../../entities/role.entity-schema';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
  imports: [TypeOrmModule.forFeature([RoleEntitySchema])],
})
export class RoleModule {}
