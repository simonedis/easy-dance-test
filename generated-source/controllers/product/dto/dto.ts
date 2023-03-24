import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IProduct } from '../../../models/product.entity-model';
import { IWarehouse } from '../../../models/warehouse.entity-model';
import { WarehouseBaseDto } from '../../warehouse/dto/dto';
export class ProductBaseDto implements IProduct {
  @ApiPropertyExt({ type: String })
  name: string;

  @ApiPropertyExt({ type: Number })
  price: string;

  @ApiPropertyExt({ type: Number })
  qta: string;

  @ApiPropertyExt({ type: () => WarehouseBaseDto, isArray: false })
  warehouse?: IWarehouse;
}

export class CreateProductRequestDto extends ProductBaseDto {}

export class CreateProductResponseDto extends ProductBaseDto {}

export class UpdateProductRequestDto extends ProductBaseDto {}

export class UpdateProductResponseDto extends ProductBaseDto {}

export class PatchProductRequestDto extends ProductBaseDto {}

export class PatchProductResponseDto extends ProductBaseDto {}

export class FilterProductRequestDto extends ProductBaseDto {}

export class GetProductResponseDto extends ProductBaseDto {}
