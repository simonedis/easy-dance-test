import {
  CreateCrudController,
  IEntityController,
} from '@odda-studio/base-crud';
import { PrivePartyRuleService } from './services/prive-party-rule.service';
import { Controller } from '@nestjs/common';
import { IPrivePartyRule } from '../../models/prive-party-rule.entity-model';
import { ApiTags } from '@nestjs/swagger';
import { config } from './prive-party-rule.config';

@ApiTags('privePartyRule')
@Controller('prive-party-rules')
export class PrivePartyRuleController
  extends CreateCrudController(config)<IPrivePartyRule>
  implements IEntityController<IPrivePartyRule>
{
  constructor(public service: PrivePartyRuleService) {
    super(service);
  }
}
