import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IClub } from '../../../models/club.entity-model';
import { IUser } from '../../../models/user.entity-model';
import { IAddress } from '../../../models/address.entity-model';
import { IParty } from '../../../models/party.entity-model';
import { IWarehouse } from '../../../models/warehouse.entity-model';
import { UserBaseDto } from '../../user/dto/dto';
import { AddressBaseDto } from '../../address/dto/dto';
import { PartyBaseDto } from '../../party/dto/dto';
import { WarehouseBaseDto } from '../../warehouse/dto/dto';
export class ClubBaseDto implements IClub {
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

  @ApiPropertyExt({ maxLength: 350, type: String })
  name: string;

  @ApiPropertyExt({ maxLength: 350, type: String })
  cover: string;

  @ApiPropertyExt({ maxLength: 350, type: String })
  phone: string;

  @ApiPropertyExt({ maxLength: 350, type: String })
  email: string;

  @ApiPropertyExt({ maxLength: 350, type: String })
  facebook: string;

  @ApiPropertyExt({ maxLength: 350, type: String })
  instagram: string;

  @ApiPropertyExt({ maxLength: 350, type: String })
  whatsapp: string;

  @ApiPropertyExt({ type: () => UserBaseDto, isArray: false })
  owner?: IUser;

  @ApiPropertyExt({ type: () => AddressBaseDto, isArray: false })
  address?: IAddress;

  @ApiPropertyExt({ type: () => PartyBaseDto, isArray: true })
  parties?: IParty[];

  @ApiPropertyExt({ type: () => WarehouseBaseDto, isArray: false })
  warehouse?: IWarehouse;
}

export class CreateClubRequestDto extends ClubBaseDto {}

export class CreateClubResponseDto extends ClubBaseDto {}

export class UpdateClubRequestDto extends ClubBaseDto {}

export class UpdateClubResponseDto extends ClubBaseDto {}

export class PatchClubRequestDto extends ClubBaseDto {}

export class PatchClubResponseDto extends ClubBaseDto {}

export class FilterClubRequestDto extends ClubBaseDto {}

export class GetClubResponseDto extends ClubBaseDto {}
