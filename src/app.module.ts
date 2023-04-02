import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityHttpModule } from './entity-http-module/entity-http.module';
import { TypeOrmBaseModule } from './typeorm-module/typeorm-base.module';
import { CmsConfiguration } from '@odda-studio/base-crud-decorators';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/canActivate.guard';
import { APP_GUARD } from '@nestjs/core';
import { RoleService } from '../generated-source/controllers/role/services/role.service';

@Module({
  imports: [
    TypeOrmBaseModule,
    EntityHttpModule,
    AuthModule,
    CmsConfiguration.setup(
      'configuration',
      [
        'crud-gen.entities.json',
        'crud-gen.system.json',
        'crud-gen.warehouse.json',
      ],
      {
        endpoint: 'http://localhost:3000',
      },
      true,
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {
  constructor(r: RoleService) {}
}
