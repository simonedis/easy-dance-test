import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  ValidationError,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiResponse } from '@nestjs/swagger';

type IConstraint =
  | string
  | boolean
  | number
  | string[]
  | number[]
  | Array<{ label: string; value: number | string }>;

interface IFieldError {
  i18n: string;
  constraint: IConstraint;
}
interface IFieldErrorGroup {
  /**
   * key will be the name of the fields of body sent
   */
  [key: string]: Array<IFieldError>;
}

export const badRequest400 = () => {
  return ApiResponse({
    status: 400,
    schema: {
      properties: {
        errors: {
          additionalProperties: {
            description: 'property sent in body',
            required: ['i18n', 'constraint'],
            items: {
              properties: {
                i18n: {
                  type: 'string',
                },
                constraint: {},
              },
            },
          },
        },
      },
    },
  });
};

interface IContexts {
  /**
   * key will be isRequired,minLength,maxLength,isNotEmpty.... will be all mapped
   */
  [key: string]: {
    error: string;
    constraint: number;
  };
}

export class BadRequestDtoParserException extends BadRequestException {
  fieldErrors: IFieldErrorGroup;
  constructor(errors: ValidationError[], public message: string) {
    super(
      errors.reduce((errors, error) => {
        errors[error.property] = Object.values(error.contexts).map(
          (f: { error: string; constraint: IConstraint }) => {
            return {
              i18n: f.error,
              constraint: f.constraint,
            } as IFieldError;
          },
        );
        return errors;
      }, {}),
    );
  }

  mapErrors(errors: ValidationError[]) {
    this.fieldErrors = errors.reduce((errors, error) => {
      errors[error.property] = Object.values(error.contexts).map(
        (f: { error: string; constraint: IConstraint }) => {
          return {
            i18n: f.error,
            constraint: f.constraint,
          } as IFieldError;
        },
      );
      return errors;
    }, {});
  }
}

@Catch(HttpException)
export class BadRequestDtoParserExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestDtoParserException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(400).json({
      statusCode: 400,
      timestamp: new Date().toISOString(),
      path: request.url,
      errors: exception.getResponse(),
    });
  }
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(
    exception: BadRequestDtoParserException | HttpException | unknown,
    host: ArgumentsHost,
  ): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof BadRequestDtoParserException) {
      response.status(400).json({
        statusCode: 400,
        timestamp: new Date().toISOString(),
        path: request.url,
        errors: exception.getResponse(),
      });
      return;
    }
    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json({
        statusCode: exception.getStatus(),
        timestamp: new Date().toISOString(),
        path: request.url,
        errors: exception.getResponse(),
      });
      return;
    }

    response.status(500).json({
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: request.url,
      errors: 'INTERNAL_SERVER_ERROR',
    });
  }
}
