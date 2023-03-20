import { Module } from '@nestjs/common';
import { PriveController } from './prive.controller';
import { PriveService } from './services/prive.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriveEntitySchema } from '../../entities/prive.entity-schema';

@Module({
  controllers: [PriveController],
  providers: [PriveService],
  exports: [PriveService],
  imports: [TypeOrmModule.forFeature([PriveEntitySchema])],
})
export class PriveModule {}
