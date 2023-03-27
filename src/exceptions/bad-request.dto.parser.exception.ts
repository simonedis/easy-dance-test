import { ValidationError } from '@nestjs/common';

type IConstraint =
  | string
  | boolean
  | number
  | string[]
  | number[]
  | Array<{ label: string; value: number | string }>;

interface IFieldError {
  label: string;
  constraint: IConstraint;
}
interface IFieldErrorGroup {
  errors: Array<IFieldError>;
}

interface IContexts {
  [key: string]: {
    error: string;
    constraint: number;
  };
}

export class BadRequestDtoParserException {
  fieldErrors: Array<IFieldErrorGroup>;
  constructor(errors: ValidationError[], public message: string) {
    this.mapErrors(errors);
  }

  mapErrors(errors: ValidationError[]) {
    this.fieldErrors = errors.map((f) => {
      return {
        field: f.property,
        errors: Object.values(f.contexts as IContexts).map((f) => {
          return {
            constraint: f.constraint,
            label: f.error,
          };
        }),
      };
    });
  }
}
