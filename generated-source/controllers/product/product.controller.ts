import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { ProductService } from './services/product.service';
import { Controller } from '@nestjs/common';
import { IProduct } from '../../models/product.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './product.config';

@ApiTags('product')
@Controller('products')
export class ProductController
  extends CreateCrudController(config)<IProduct>
  implements IEntityController<IProduct>
{
  constructor(public service: ProductService) {
    super(service);
  }
}
