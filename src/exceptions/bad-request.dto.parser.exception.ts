import { ValidationError } from '@nestjs/common';

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

interface IContexts {
  /**
   * key will be isRequired,minLength,maxLength,isNotEmpty.... will be all mapped
   */
  [key: string]: {
    error: string;
    constraint: number;
  };
}

export class BadRequestDtoParserException {
  fieldErrors: IFieldErrorGroup;
  constructor(errors: ValidationError[], public message: string) {
    this.mapErrors(errors);
  }

  mapErrors(errors: ValidationError[]) {
    // this.fieldErrors = errors.map((f) => {
    //   return {
    //     field: f.property,
    //     errors: Object.values(f.contexts as IContexts).map((f) => {
    //       return {
    //         constraint: f.constraint,
    //         label: f.error,
    //       };
    //     }),
    //   };
    // });
  }
}
