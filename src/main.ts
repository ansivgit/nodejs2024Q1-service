import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';

import { AppModule } from './app.module';
import { getSwaggerDoc } from './helpers';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDoc = await getSwaggerDoc();
  SwaggerModule.setup('doc', app, swaggerDoc);

  await app.listen(PORT);
}

bootstrap();
