import { EntitySchema } from 'typeorm';
import { IPriveReservation } from '../models/prive-reservation.entity-model';
export const PriveReservationEntitySchema = new EntitySchema<IPriveReservation>(
  {
    columns: {
      id: {
        type: 'integer',
        primary: true,
        generated: 'increment',
        name: 'id',
      },
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
      status: { type: 'enum', enum: [], name: 'status' },
    },
    relations: {
      user: {
        type: 'many-to-one',
        target: 'user',
        inverseSide: 'reservations',
      },
      privePartyRule: {
        type: 'many-to-one',
        target: 'privePartyRule',
        inverseSide: 'reservations',
      },
    },
    name: 'priveReservation',
    tableName: 'priveReservation',
  },
);
