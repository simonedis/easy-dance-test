import { Module } from '@nestjs/common';
import { PriceListItemController } from './price-list-item.controller';
import { PriceListItemService } from './services/price-list-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceListItemEntitySchema } from '../../entities/price-list-item.entity-schema';

@Module({
  controllers: [PriceListItemController],
  providers: [PriceListItemService],
  exports: [PriceListItemService],
  imports: [TypeOrmModule.forFeature([PriceListItemEntitySchema])],
})
export class PriceListItemModule {}
