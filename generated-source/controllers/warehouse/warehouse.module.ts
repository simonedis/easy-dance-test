import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './services/warehouse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseEntitySchema } from '../../entities/warehouse.entity-schema';

@Module({
  controllers: [WarehouseController],
  providers: [WarehouseService],
  exports: [WarehouseService],
  imports: [TypeOrmModule.forFeature([WarehouseEntitySchema])],
})
export class WarehouseModule {}
