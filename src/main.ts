import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  BadRequestDtoParserExceptionFilter,
  GlobalExceptionFilter,
} from './exceptions/bad-request.dto.parser.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setDescription('Your api')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: 'Default JWT Authorization',
        type: 'http',
        in: 'header',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'bearer',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config, {});
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new BadRequestDtoParserExceptionFilter());
  app.useGlobalFilters(new GlobalExceptionFilter());

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
