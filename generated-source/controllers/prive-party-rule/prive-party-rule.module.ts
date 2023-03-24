import { Module } from '@nestjs/common';
import { PrivePartyRuleController } from './prive-party-rule.controller';
import { PrivePartyRuleService } from './services/prive-party-rule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivePartyRuleEntitySchema } from '../../entities/prive-party-rule.entity-schema';

@Module({
  controllers: [PrivePartyRuleController],
  providers: [PrivePartyRuleService],
  exports: [PrivePartyRuleService],
  imports: [TypeOrmModule.forFeature([PrivePartyRuleEntitySchema])],
})
export class PrivePartyRuleModule {}
