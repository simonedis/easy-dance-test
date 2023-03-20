import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPriveOrder } from '../../../models/prive-order.entity-model';

export class PriveOrderBaseDto implements IPriveOrder {
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
  createdBy?: string;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  updatedBy?: string;

  @ApiPropertyExt({ type: Object, required: false, nullable: true })
  deletedBy?: string;
}

export class CreatePriveOrderRequestDto extends PriveOrderBaseDto {}

export class CreatePriveOrderResponseDto extends PriveOrderBaseDto {}

export class UpdatePriveOrderRequestDto extends PriveOrderBaseDto {}

export class UpdatePriveOrderResponseDto extends PriveOrderBaseDto {}

export class PatchPriveOrderRequestDto extends PriveOrderBaseDto {}

export class PatchPriveOrderResponseDto extends PriveOrderBaseDto {}

export class FilterPriveOrderRequestDto extends PriveOrderBaseDto {}

export class GetPriveOrderResponseDto extends PriveOrderBaseDto {}
