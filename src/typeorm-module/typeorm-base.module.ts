import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntitySchema } from '../../generated-source/entities/user.entity-schema';
import { ClubEntitySchema } from '../../generated-source/entities/club.entity-schema';
import { AddressEntitySchema } from '../../generated-source/entities/address.entity-schema';
import { RoleEntitySchema } from '../../generated-source/entities/role.entity-schema';
import { PartyEntitySchema } from '../../generated-source/entities/party.entity-schema';
import { PriveEntitySchema } from '../../generated-source/entities/prive.entity-schema';
import { PriveOrderEntitySchema } from '../../generated-source/entities/prive-order.entity-schema';
import { ProductEntitySchema } from '../../generated-source/entities/product.entity-schema';
import { WarehouseEntitySchema } from '../../generated-source/entities/warehouse.entity-schema';
import { UserToClubFollowerEntitySchema } from '../../generated-source/entities/user-to-club-follower.entity-schema';
import { UserToUserFollowerEntitySchema } from '../../generated-source/entities/user-to-user-follower.entity-schema';
import { PriveCategoryEntitySchema } from '../../generated-source/entities/prive-category.entity-schema';
import { PriveOrderRowEntitySchema } from '../../generated-source/entities/prive-order-row.entity-schema';
import { PriceListItemEntitySchema } from '../../generated-source/entities/price-list-item.entity-schema';
import { config } from './ormconfig';

export const typeormConfig: TypeOrmModuleOptions = {
  ...config,
  entities: [
    AddressEntitySchema,
    ClubEntitySchema,
    PartyEntitySchema,
    PriveEntitySchema,
    PriveOrderEntitySchema,
    PriveOrderRowEntitySchema,
    ProductEntitySchema,
    PriceListItemEntitySchema,
    PriveCategoryEntitySchema,
    PriveCategoryEntitySchema,
    RoleEntitySchema,
    UserEntitySchema,
    WarehouseEntitySchema,
    UserToClubFollowerEntitySchema,
    UserToUserFollowerEntitySchema,
    PriveCategoryEntitySchema,
  ],
};

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig)],
  exports: [TypeOrmModule],
})
export class TypeOrmBaseModule {}
