import { Module } from '@nestjs/common';
import { ScopeController } from './scope.controller';
import { ScopeService } from './services/scope.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScopeEntitySchema } from '../../entities/scope.entity-schema';

@Module({
  controllers: [ScopeController],
  providers: [ScopeService],
  exports: [ScopeService],
  imports: [TypeOrmModule.forFeature([ScopeEntitySchema])],
})
export class ScopeModule {}
