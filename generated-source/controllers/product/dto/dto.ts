import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IProduct } from '../../../models/product.entity-model';
import { IWarehouse } from '../../../models/warehouse.entity-model';
import { WarehouseBaseDto } from '../../warehouse/dto/dto';
export class ProductBaseDto implements IProduct {
  @ApiPropertyExt({ type: Number, required: false })
  id: number;

  @ApiPropertyExt({ type: Object, required: false })
  uuid: string;

  @ApiPropertyExt({ type: Date, required: false })
  createdAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  updatedAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  deletedAt: Date;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  createdBy?: any;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  updatedBy?: any;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  deletedBy?: any;

  @ApiPropertyExt({ type: String })
  name: string;

  @ApiPropertyExt({ type: Number })
  price: number;

  @ApiPropertyExt({ type: Number })
  qta: number;

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
