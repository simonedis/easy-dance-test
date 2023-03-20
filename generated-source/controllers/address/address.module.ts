import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './services/address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntitySchema } from '../../entities/address.entity-schema';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService],
  imports: [TypeOrmModule.forFeature([AddressEntitySchema])],
})
export class AddressModule {}
