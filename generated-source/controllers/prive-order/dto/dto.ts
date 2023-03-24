import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { IPriveOrder } from '../../../models/prive-order.entity-model';

export class PriveOrderBaseDto implements IPriveOrder {}

export class CreatePriveOrderRequestDto extends PriveOrderBaseDto {}

export class CreatePriveOrderResponseDto extends PriveOrderBaseDto {}

export class UpdatePriveOrderRequestDto extends PriveOrderBaseDto {}

export class UpdatePriveOrderResponseDto extends PriveOrderBaseDto {}

export class PatchPriveOrderRequestDto extends PriveOrderBaseDto {}

export class PatchPriveOrderResponseDto extends PriveOrderBaseDto {}

export class FilterPriveOrderRequestDto extends PriveOrderBaseDto {}

export class GetPriveOrderResponseDto extends PriveOrderBaseDto {}
