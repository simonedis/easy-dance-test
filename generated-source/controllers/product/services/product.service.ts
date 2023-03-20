import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IProduct } from '../../../models/product.entity-model';
import { ProductEntitySchema } from '../../../entities/product.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService
  extends BaseEntityService<IProduct>
  implements IEntityService<IProduct>
{
  constructor(
    @InjectRepository(ProductEntitySchema)
    private entityRepository: Repository<IProduct>,
  ) {
    super(entityRepository, {});
  }
}
