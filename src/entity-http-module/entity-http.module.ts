import { Module } from '@nestjs/common';
import { UserModule } from '../../generated-source/controllers/user/user.module';
import { AddressModule } from '../../generated-source/controllers/address/address.module';
import { ClubModule } from '../../generated-source/controllers/club/club.module';
import { PartyModule } from '../../generated-source/controllers/party/party.module';
import { PriveModule } from '../../generated-source/controllers/prive/prive.module';
import { PriveOrderModule } from '../../generated-source/controllers/prive-order/prive-order.module';
import { ProductModule } from '../../generated-source/controllers/product/product.module';
import { RoleModule } from '../../generated-source/controllers/role/role.module';
import { WarehouseModule } from '../../generated-source/controllers/warehouse/warehouse.module';
import {
  UserToUserFollowerModule
} from "../../generated-source/controllers/user-to-user-follower/user-to-user-follower.module";

@Module({
  imports: [
    UserModule,
    AddressModule,
    ClubModule,
    PartyModule,
    PriveModule,
    PriveOrderModule,
    ProductModule,
    RoleModule,
    WarehouseModule,
      UserToUserFollowerModule
  ],
  exports: [
    UserModule,
    AddressModule,
    ClubModule,
    PartyModule,
    PriveModule,
    PriveOrderModule,
    ProductModule,
    RoleModule,
    WarehouseModule,
  ],
})
export class EntityHttpModule {}
