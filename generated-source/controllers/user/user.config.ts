import {
  CreateUserRequestDto,
  CreateUserResponseDto,
  GetUserResponseDto,
  PatchUserRequestDto,
  PatchUserResponseDto,
  UpdateUserRequestDto,
  UpdateUserResponseDto,
} from './dto/dto';
import { IUser } from '../../models/user.entity-model';
import { DtoParserPipe, IOpenApiConfiguration } from '@odda-studio/base-crud';
import { UsePipes } from '@nestjs/common';
import {
  badRequest400,
  BadRequestDtoParserException,
} from '../../../src/exceptions/bad-request.dto.parser.exception';
import { Public } from '../../../src/decorators/public';

export const config: IOpenApiConfiguration<IUser> = {
  create: {
    request: CreateUserRequestDto,
    response: CreateUserResponseDto,
    customValidators: [
      Public,
      UsePipes(
        new DtoParserPipe(
          {
            transform: true,
            whitelist: false,
            exceptionFactory: (errors) => {
              throw new BadRequestDtoParserException(errors, '');
            },
          },
          CreateUserRequestDto,
        ),
      ),
      badRequest400(),
    ],
  },
  update: {
    request: UpdateUserRequestDto,
    response: UpdateUserResponseDto,
  },
  get: {
    request: undefined,
    response: GetUserResponseDto,
  },
  getAll: {
    request: undefined,
    response: GetUserResponseDto,
  },
  patch: {
    request: PatchUserRequestDto,
    response: PatchUserResponseDto,
  },
};
