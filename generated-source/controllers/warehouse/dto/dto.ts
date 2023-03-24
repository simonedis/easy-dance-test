import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IWarehouse } from '../../../models/warehouse.entity-model';
import { IProduct } from '../../../models/product.entity-model';
import { IClub } from '../../../models/club.entity-model';
import { ProductBaseDto } from '../../product/dto/dto';
import { ClubBaseDto } from '../../club/dto/dto';
export class WarehouseBaseDto implements IWarehouse {
  @ApiPropertyExt({ type: () => ProductBaseDto, isArray: true })
  products?: IProduct[];

  @ApiPropertyExt({ type: () => ClubBaseDto, isArray: false })
  club?: IClub;
}

export class CreateWarehouseRequestDto extends WarehouseBaseDto {}

export class CreateWarehouseResponseDto extends WarehouseBaseDto {}

export class UpdateWarehouseRequestDto extends WarehouseBaseDto {}

export class UpdateWarehouseResponseDto extends WarehouseBaseDto {}

export class PatchWarehouseRequestDto extends WarehouseBaseDto {}

export class PatchWarehouseResponseDto extends WarehouseBaseDto {}

export class FilterWarehouseRequestDto extends WarehouseBaseDto {}

export class GetWarehouseResponseDto extends WarehouseBaseDto {}
