import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPriceListItem } from '../../../models/price-list-item.entity-model';
import { IParty } from '../../../models/party.entity-model';
import { IProduct } from '../../../models/product.entity-model';
import { PartyBaseDto } from '../../party/dto/dto';
import { ProductBaseDto } from '../../product/dto/dto';
export class PriceListItemBaseDto implements IPriceListItem {
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

  @ApiPropertyExt({ type: () => PartyBaseDto, isArray: false })
  party?: IParty;

  @ApiPropertyExt({ type: () => ProductBaseDto, isArray: false })
  product?: IProduct;
}

export class CreatePriceListItemRequestDto extends PriceListItemBaseDto {}

export class CreatePriceListItemResponseDto extends PriceListItemBaseDto {}

export class UpdatePriceListItemRequestDto extends PriceListItemBaseDto {}

export class UpdatePriceListItemResponseDto extends PriceListItemBaseDto {}

export class PatchPriceListItemRequestDto extends PriceListItemBaseDto {}

export class PatchPriceListItemResponseDto extends PriceListItemBaseDto {}

export class FilterPriceListItemRequestDto extends PriceListItemBaseDto {}

export class GetPriceListItemResponseDto extends PriceListItemBaseDto {}
