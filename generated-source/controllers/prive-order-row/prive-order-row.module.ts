import { Module } from '@nestjs/common';
import { PriveOrderRowController } from './prive-order-row.controller';
import { PriveOrderRowService } from './services/prive-order-row.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriveOrderRowEntitySchema } from '../../entities/prive-order-row.entity-schema';

@Module({
  controllers: [PriveOrderRowController],
  providers: [PriveOrderRowService],
  exports: [PriveOrderRowService],
  imports: [TypeOrmModule.forFeature([PriveOrderRowEntitySchema])],
})
export class PriveOrderRowModule {}
