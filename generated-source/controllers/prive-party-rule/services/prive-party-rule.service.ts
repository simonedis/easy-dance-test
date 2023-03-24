import { BaseEntityService, IEntityService } from '@odda-studio/base-crud';
import { IPrivePartyRule } from '../../../models/prive-party-rule.entity-model';
import { PrivePartyRuleEntitySchema } from '../../../entities/prive-party-rule.entity-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrivePartyRuleService
  extends BaseEntityService<IPrivePartyRule>
  implements IEntityService<IPrivePartyRule>
{
  constructor(
    @InjectRepository(PrivePartyRuleEntitySchema)
    private entityRepository: Repository<IPrivePartyRule>,
  ) {
    super(entityRepository, {});
  }
}
