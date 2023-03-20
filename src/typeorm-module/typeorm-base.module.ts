import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntitySchema } from '../../generated-source/entities/user.entity-schema';
import { UserFollowerEntitySchema } from '../../generated-source/entities/user-follower.entity-schema';
import { ClubEntitySchema } from '../../generated-source/entities/club.entity-schema';
import { AddressEntitySchema } from '../../generated-source/entities/address.entity-schema';
import { RoleEntitySchema } from '../../generated-source/entities/role.entity-schema';
import { ScopeEntitySchema } from '../../generated-source/entities/scope.entity-schema';
import { PartyEntitySchema } from '../../generated-source/entities/party.entity-schema';
import { ClubFollowerEntitySchema } from '../../generated-source/entities/club-follower.entity-schema';
import { PriveEntitySchema } from '../../generated-source/entities/prive.entity-schema';
import { PriveOrderEntitySchema } from '../../generated-source/entities/prive-order.entity-schema';
import { ProductEntitySchema } from '../../generated-source/entities/product.entity-schema';
import { WarehouseEntitySchema } from '../../generated-source/entities/warehouse.entity-schema';
export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: Number(5432),
  username: 'root',
  password: 'root',
  database: 'template',
  synchronize: Boolean(true),
  entities: [
    AddressEntitySchema,
    ClubEntitySchema,
    ClubFollowerEntitySchema,
    PartyEntitySchema,
    PriveEntitySchema,
    PriveOrderEntitySchema,
    ProductEntitySchema,
    RoleEntitySchema,
    ScopeEntitySchema,
    UserEntitySchema,
    UserFollowerEntitySchema,
    WarehouseEntitySchema,
  ],
};

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig)],
  exports: [TypeOrmModule],
})
export class TypeOrmBaseModule {}
