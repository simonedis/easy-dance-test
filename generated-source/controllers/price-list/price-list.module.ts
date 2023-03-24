import { Module } from '@nestjs/common';
import { PriceListController } from './price-list.controller';
import { PriceListService } from './services/price-list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceListEntitySchema } from '../../entities/price-list.entity-schema';

@Module({
  controllers: [PriceListController],
  providers: [PriceListService],
  exports: [PriceListService],
  imports: [TypeOrmModule.forFeature([PriceListEntitySchema])],
})
export class PriceListModule {}
