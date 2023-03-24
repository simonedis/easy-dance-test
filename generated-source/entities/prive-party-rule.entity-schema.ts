import { EntitySchema } from 'typeorm';
import { IPrivePartyRule } from '../models/prive-party-rule.entity-model';
export const PrivePartyRuleEntitySchema = new EntitySchema<IPrivePartyRule>({
  columns: {
    id: { type: 'integer', primary: true, generated: 'increment', name: 'id' },
    uuid: { type: 'uuid', generated: 'uuid', name: 'uuid' },
    createdAt: { type: 'timestamp', default: 'NOW()', name: 'createdAt' },
    updatedAt: {
      type: 'timestamp',
      default: null,
      onUpdate: 'NOW()',
      updateDate: true,
      name: 'updatedAt',
    },
    deletedAt: {
      type: 'timestamp',
      default: null,
      deleteDate: true,
      name: 'deletedAt',
    },
    createdBy: { type: 'uuid', nullable: true, name: 'createdBy' },
    updatedBy: { type: 'uuid', nullable: true, name: 'updatedBy' },
    deletedBy: { type: 'uuid', nullable: true, name: 'deletedBy' },
    minimumBill: { type: 'bigint', name: 'minimumBill' },
  },
  relations: {
    party: { target: 'party', type: 'many-to-one', inverseSide: 'rules' },
    prive: { target: 'prive', type: 'many-to-one', inverseSide: 'rules' },
  },
  name: 'privePartyRule',
  tableName: 'privePartyRule',
});
