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
import { UserToUserFollowerModule } from '../../generated-source/controllers/user-to-user-follower/user-to-user-follower.module';
import { UserToClubFollowerModule } from '../../generated-source/controllers/user-to-club-follower/user-to-club-follower.module';
import { PartyParticipationModule } from '../../generated-source/controllers/party-participation/party-participation.module';
import { PriceListItemModule } from '../../generated-source/controllers/price-list-item/price-list-item.module';
import { PriveCategoryModule } from '../../generated-source/controllers/prive-category/prive-category.module';
import { PriveOrderRowModule } from '../../generated-source/controllers/prive-order-row/prive-order-row.module';
import { PrivePartyRuleModule } from '../../generated-source/controllers/prive-party-rule/prive-party-rule.module';
import { PriveReservationModule } from '../../generated-source/controllers/prive-reservation/prive-reservation.module';
import { SavedPartyModule } from '../../generated-source/controllers/saved-party/saved-party.module';

@Module({
  imports: [
    AddressModule,
    ClubModule,
    PartyModule,
    PartyParticipationModule,
    PriceListItemModule,
    PriveModule,
    PriveCategoryModule,

    PriveOrderModule,
    PriveOrderRowModule,
    PrivePartyRuleModule,
    PriveReservationModule,

    ProductModule,
    RoleModule,
    SavedPartyModule,
    UserToUserFollowerModule,
    UserToClubFollowerModule,

    UserModule,
    WarehouseModule,
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
