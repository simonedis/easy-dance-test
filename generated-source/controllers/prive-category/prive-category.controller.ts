import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PriveCategoryService } from './services/prive-category.service';
import { Controller } from '@nestjs/common';
import { IPriveCategory } from '../../models/prive-category.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './prive-category.config';

@ApiTags('priveCategory')
@Controller('prive-categories')
export class PriveCategoryController
  extends CreateCrudController(config)<IPriveCategory>
  implements IEntityController<IPriveCategory>
{
  constructor(public service: PriveCategoryService) {
    super(service);
  }
}
