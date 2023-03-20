import { Module } from '@nestjs/common';
import { PriveOrderController } from './prive-order.controller';
import { PriveOrderService } from './services/prive-order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriveOrderEntitySchema } from '../../entities/prive-order.entity-schema';

@Module({
  controllers: [PriveOrderController],
  providers: [PriveOrderService],
  exports: [PriveOrderService],
  imports: [TypeOrmModule.forFeature([PriveOrderEntitySchema])],
})
export class PriveOrderModule {}
