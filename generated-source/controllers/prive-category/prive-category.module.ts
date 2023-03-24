import { Module } from '@nestjs/common';
import { PriveCategoryController } from './prive-category.controller';
import { PriveCategoryService } from './services/prive-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriveCategoryEntitySchema } from '../../entities/prive-category.entity-schema';

@Module({
  controllers: [PriveCategoryController],
  providers: [PriveCategoryService],
  exports: [PriveCategoryService],
  imports: [TypeOrmModule.forFeature([PriveCategoryEntitySchema])],
})
export class PriveCategoryModule {}
