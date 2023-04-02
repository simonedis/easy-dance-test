import {
  BaseEntityService,
  BaseRequest,
  IEntityService,
  TEntity,
} from '@odda-studio/base-crud';
import { IUser } from '../../../models/user.entity-model';
import { UserEntitySchema } from '../../../entities/user.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { BadRequestDtoParserException } from '../../../../src/exceptions/bad-request.dto.parser.exception';

const saltOrRounds = 10;

@Injectable()
export class UserService
  extends BaseEntityService<IUser>
  implements IEntityService<IUser>
{
  constructor(
    @InjectRepository(UserEntitySchema)
    private entityRepository: Repository<IUser>,
  ) {
    super(entityRepository, {});
  }

  replace(
    id: number,
    item: TEntity<IUser>,
    request: BaseRequest<IUser>,
  ): Promise<IUser> {
    const _request = new BaseRequest(
      request.filters,
      {
        roles: true,
      },
      request.fields,
    );
    return super.update(id, item, _request);
  }

  protected async beforeCreate(item: TEntity<IUser>): Promise<any> {
    const user = await this.repository().findOne({
      where: [
        {
          username: item.username,
        },
        {
          email: item.email,
        },
      ],
      withDeleted: true,
    });
    if (user != null) {
      throw new BadRequestDtoParserException([], '');
    }

    item.password = await hash(item.password, saltOrRounds);
    return super.beforeCreate(item);
  }

  protected afterFindOne(
    response: IUser | null,
    request: BaseRequest<IUser>,
  ): Promise<any> {
    return super.afterFindOne(response, request);
  }
}
