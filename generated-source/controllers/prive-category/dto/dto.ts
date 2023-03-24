import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPriveCategory } from '../../../models/prive-category.entity-model';
import { IClub } from '../../../models/club.entity-model';
import { ClubBaseDto } from '../../club/dto/dto';
export class PriveCategoryBaseDto implements IPriveCategory {
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

  @ApiPropertyExt({ type: Number, nullable: true })
  minimumBill?: number;

  @ApiPropertyExt({ type: () => ClubBaseDto, isArray: false })
  club?: IClub;
}

export class CreatePriveCategoryRequestDto extends PriveCategoryBaseDto {}

export class CreatePriveCategoryResponseDto extends PriveCategoryBaseDto {}

export class UpdatePriveCategoryRequestDto extends PriveCategoryBaseDto {}

export class UpdatePriveCategoryResponseDto extends PriveCategoryBaseDto {}

export class PatchPriveCategoryRequestDto extends PriveCategoryBaseDto {}

export class PatchPriveCategoryResponseDto extends PriveCategoryBaseDto {}

export class FilterPriveCategoryRequestDto extends PriveCategoryBaseDto {}

export class GetPriveCategoryResponseDto extends PriveCategoryBaseDto {}
