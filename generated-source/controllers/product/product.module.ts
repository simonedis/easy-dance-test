import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntitySchema } from '../../entities/product.entity-schema';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
  imports: [TypeOrmModule.forFeature([ProductEntitySchema])],
})
export class ProductModule {}
