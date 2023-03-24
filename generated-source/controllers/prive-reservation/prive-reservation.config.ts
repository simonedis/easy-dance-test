import {
  CreatePriveReservationRequestDto,
  CreatePriveReservationResponseDto,
  UpdatePriveReservationRequestDto,
  UpdatePriveReservationResponseDto,
  PatchPriveReservationRequestDto,
  PatchPriveReservationResponseDto,
  GetPriveReservationResponseDto,
} from './dto/dto';
import { IPriveReservation } from '../../models/prive-reservation.entity-model';
import { IOpenApiConfiguration } from '@odda-studio/base-crud';
export const config: IOpenApiConfiguration<IPriveReservation> = {
  create: {
    request: CreatePriveReservationRequestDto,
    response: CreatePriveReservationResponseDto,
  },
  update: {
    request: UpdatePriveReservationRequestDto,
    response: UpdatePriveReservationResponseDto,
  },
  get: {
    request: undefined,
    response: GetPriveReservationResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetPriveReservationResponseDto,
  },
  patch: {
    request: PatchPriveReservationRequestDto,
    response: PatchPriveReservationResponseDto,
  },
};
