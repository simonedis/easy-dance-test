import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityHttpModule } from './entity-http-module/entity-http.module';
import { TypeOrmBaseModule } from './typeorm-module/typeorm-base.module';
import { CmsConfiguration } from '@odda-studio/base-crud';

@Module({
  imports: [
    TypeOrmBaseModule,
    EntityHttpModule,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
