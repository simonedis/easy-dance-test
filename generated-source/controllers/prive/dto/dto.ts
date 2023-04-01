import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPrive } from '../../../models/prive.entity-model';
import { IClub } from '../../../models/club.entity-model';
import { IPriveOrder } from '../../../models/prive-order.entity-model';
import { IPriveCategory } from '../../../models/prive-category.entity-model';
import { ClubBaseDto } from '../../club/dto/dto';
import { PriveOrderBaseDto } from '../../prive-order/dto/dto';
import { PriveCategoryBaseDto } from '../../prive-category/dto/dto';
export class PriveBaseDto implements IPrive {
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

  @ApiPropertyExt({ type: String })
  name: string;

  @ApiPropertyExt({ type: Number })
  capacity: number;

  @ApiPropertyExt({ type: Number, nullable: true })
  minimumBill?: number;

  @ApiPropertyExt({ type: Boolean })
  enabled: boolean;

  @ApiPropertyExt({ type: () => ClubBaseDto, isArray: false })
  club?: IClub;

  @ApiPropertyExt({ type: () => PriveOrderBaseDto, isArray: true })
  priveOrders?: IPriveOrder[];

  @ApiPropertyExt({ type: () => PriveCategoryBaseDto, isArray: true })
  categories?: IPriveCategory[];
}

export class CreatePriveRequestDto extends PriveBaseDto {}

export class CreatePriveResponseDto extends PriveBaseDto {}

export class UpdatePriveRequestDto extends PriveBaseDto {}

export class UpdatePriveResponseDto extends PriveBaseDto {}

export class PatchPriveRequestDto extends PriveBaseDto {}

export class PatchPriveResponseDto extends PriveBaseDto {}

export class FilterPriveRequestDto extends PriveBaseDto {}

export class GetPriveResponseDto extends PriveBaseDto {}
