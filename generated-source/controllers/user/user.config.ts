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
import { BadRequestDtoParserException } from '../../../src/exceptions/bad-request.dto.parser.exception';

export const config: IOpenApiConfiguration<IUser> = {
  create: {
    request: CreateUserRequestDto,
    response: CreateUserResponseDto,
    customValidators: [
      UsePipes(
        new DtoParserPipe(
          {
            transform: true,
            whitelist: false,
            exceptionFactory: (errors) => {
              throw JSON.stringify(
                new BadRequestDtoParserException(errors, ''),
              );
            },
          },
          CreateUserRequestDto,
        ),
      ),
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
