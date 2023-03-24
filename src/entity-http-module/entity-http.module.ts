import { Module } from '@nestjs/common';
import { UserModule } from '../../generated-source/controllers/user/user.module';
import { AddressModule } from '../../generated-source/controllers/address/address.module';
import { ClubModule } from '../../generated-source/controllers/club/club.module';
import { ClubFollowerModule } from '../../generated-source/controllers/club-follower/club-follower.module';
import { PartyModule } from '../../generated-source/controllers/party/party.module';
import { PriveModule } from '../../generated-source/controllers/prive/prive.module';
import { PriveOrderModule } from '../../generated-source/controllers/prive-order/prive-order.module';
import { ProductModule } from '../../generated-source/controllers/product/product.module';
import { RoleModule } from '../../generated-source/controllers/role/role.module';
import { ScopeModule } from '../../generated-source/controllers/scope/scope.module';
import { UserFollowerModule } from '../../generated-source/controllers/user-follower/user-follower.module';
import { WarehouseModule } from '../../generated-source/controllers/warehouse/warehouse.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    ClubModule,
    ClubFollowerModule,
    PartyModule,
    PriveModule,
    PriveOrderModule,
    ProductModule,
    RoleModule,
    ScopeModule,
    UserFollowerModule,
    WarehouseModule,
  ],
  exports: [
    UserModule,
    AddressModule,
    ClubModule,
    ClubFollowerModule,
    PartyModule,
    PriveModule,
    PriveOrderModule,
    ProductModule,
    RoleModule,
    ScopeModule,
    UserFollowerModule,
    WarehouseModule,
  ],
})
export class EntityHttpModule {}
