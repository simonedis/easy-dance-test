import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPriveReservation } from '../../../models/prive-reservation.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { IPrivePartyRule } from '../../../models/prive-party-rule.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
import { PrivePartyRuleBaseDto } from '../../prive-party-rule/dto/dto';
export class PriveReservationBaseDto implements IPriveReservation {
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

  @ApiPropertyExt({ type: Object })
  status: any;

  @ApiPropertyExt({ type: () => UserBaseDto, isArray: false })
  user?: IUser;

  @ApiPropertyExt({ type: () => PrivePartyRuleBaseDto, isArray: false })
  privePartyRule?: IPrivePartyRule;
}

export class CreatePriveReservationRequestDto extends PriveReservationBaseDto {}

export class CreatePriveReservationResponseDto extends PriveReservationBaseDto {}

export class UpdatePriveReservationRequestDto extends PriveReservationBaseDto {}

export class UpdatePriveReservationResponseDto extends PriveReservationBaseDto {}

export class PatchPriveReservationRequestDto extends PriveReservationBaseDto {}

export class PatchPriveReservationResponseDto extends PriveReservationBaseDto {}

export class FilterPriveReservationRequestDto extends PriveReservationBaseDto {}

export class GetPriveReservationResponseDto extends PriveReservationBaseDto {}
