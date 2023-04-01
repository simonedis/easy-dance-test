import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPriveOrder } from '../../../models/prive-order.entity-model';
import { IPrive } from '../../../models/prive.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { IPriveOrderRow } from '../../../models/prive-order-row.entity-model';
import { PriveBaseDto } from '../../prive/dto/dto';
import { UserBaseDto } from '../../user/dto/dto';
import { PriveOrderRowBaseDto } from '../../prive-order-row/dto/dto';
export class PriveOrderBaseDto implements IPriveOrder {
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

  @ApiPropertyExt({ type: Number, nullable: true })
  bill?: number;

  @ApiPropertyExt({ type: Object })
  name: any;

  @ApiPropertyExt({ type: () => PriveBaseDto, isArray: false })
  prive?: IPrive;

  @ApiPropertyExt({ type: () => UserBaseDto, isArray: false })
  user?: IUser;

  @ApiPropertyExt({ type: () => PriveOrderRowBaseDto, isArray: true })
  rows?: IPriveOrderRow[];
}

export class CreatePriveOrderRequestDto extends PriveOrderBaseDto {}

export class CreatePriveOrderResponseDto extends PriveOrderBaseDto {}

export class UpdatePriveOrderRequestDto extends PriveOrderBaseDto {}

export class UpdatePriveOrderResponseDto extends PriveOrderBaseDto {}

export class PatchPriveOrderRequestDto extends PriveOrderBaseDto {}

export class PatchPriveOrderResponseDto extends PriveOrderBaseDto {}

export class FilterPriveOrderRequestDto extends PriveOrderBaseDto {}

export class GetPriveOrderResponseDto extends PriveOrderBaseDto {}
