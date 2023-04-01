import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPriveOrderRow } from '../../../models/prive-order-row.entity-model';
import { IPriceListItem } from '../../../models/price-list-item.entity-model';
import { PriceListItemBaseDto } from '../../price-list-item/dto/dto';
export class PriveOrderRowBaseDto implements IPriveOrderRow {
  @ApiPropertyExt({ type: Number, required: false })
  id: number;

  @ApiPropertyExt({ type: String, required: false })
  uuid: string;

  @ApiPropertyExt({ type: Date, required: false })
  createdAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  updatedAt: Date;

  @ApiPropertyExt({ type: Date, required: false })
  deletedAt: Date;

  @ApiPropertyExt({ type: String, required: false, nullable: true })
  createdBy?: string;

  @ApiPropertyExt({ type: String, required: false, nullable: true })
  updatedBy?: string;

  @ApiPropertyExt({ type: String, required: false, nullable: true })
  deletedBy?: string;

  @ApiPropertyExt({ type: Number })
  price: number;

  @ApiPropertyExt({ type: Number })
  qty: number;

  @ApiPropertyExt({ type: () => PriceListItemBaseDto, isArray: false })
  priceListItem?: IPriceListItem;
}

export class CreatePriveOrderRowRequestDto extends PriveOrderRowBaseDto {}

export class CreatePriveOrderRowResponseDto extends PriveOrderRowBaseDto {}

export class UpdatePriveOrderRowRequestDto extends PriveOrderRowBaseDto {}

export class UpdatePriveOrderRowResponseDto extends PriveOrderRowBaseDto {}

export class PatchPriveOrderRowRequestDto extends PriveOrderRowBaseDto {}

export class PatchPriveOrderRowResponseDto extends PriveOrderRowBaseDto {}

export class FilterPriveOrderRowRequestDto extends PriveOrderRowBaseDto {}

export class GetPriveOrderRowResponseDto extends PriveOrderRowBaseDto {}
