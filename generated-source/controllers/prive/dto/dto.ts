import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPrive } from '../../../models/prive.entity-model';

export class PriveBaseDto implements IPrive {
  @ApiPropertyExt({ type: String })
  name: string;

  @ApiPropertyExt({ type: Number })
  capacity: string;

  @ApiPropertyExt({ type: Number, nullable: true })
  minimumBill?: string;

  @ApiPropertyExt({ type: Boolean })
  enabled: string;
}

export class CreatePriveRequestDto extends PriveBaseDto {}

export class CreatePriveResponseDto extends PriveBaseDto {}

export class UpdatePriveRequestDto extends PriveBaseDto {}

export class UpdatePriveResponseDto extends PriveBaseDto {}

export class PatchPriveRequestDto extends PriveBaseDto {}

export class PatchPriveResponseDto extends PriveBaseDto {}

export class FilterPriveRequestDto extends PriveBaseDto {}

export class GetPriveResponseDto extends PriveBaseDto {}
