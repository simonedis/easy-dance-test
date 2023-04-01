import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPriveReservation } from '../../../models/prive-reservation.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { IPrivePartyRule } from '../../../models/prive-party-rule.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
import { PrivePartyRuleBaseDto } from '../../prive-party-rule/dto/dto';
export class PriveReservationBaseDto implements IPriveReservation {
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
