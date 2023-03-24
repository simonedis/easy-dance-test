import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPriceList } from '../../../models/price-list.entity-model';
import { IParty } from '../../../models/party.entity-model';
import { PartyBaseDto } from '../../party/dto/dto';
export class PriceListBaseDto implements IPriceList {
  @ApiPropertyExt({ type: () => PartyBaseDto, isArray: false })
  party?: IParty;
}

export class CreatePriceListRequestDto extends PriceListBaseDto {}

export class CreatePriceListResponseDto extends PriceListBaseDto {}

export class UpdatePriceListRequestDto extends PriceListBaseDto {}

export class UpdatePriceListResponseDto extends PriceListBaseDto {}

export class PatchPriceListRequestDto extends PriceListBaseDto {}

export class PatchPriceListResponseDto extends PriceListBaseDto {}

export class FilterPriceListRequestDto extends PriceListBaseDto {}

export class GetPriceListResponseDto extends PriceListBaseDto {}
