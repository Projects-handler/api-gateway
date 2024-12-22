import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './common/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = envs.port ?? 3000;
  const HOST = envs.host;
  const logger = new Logger('api-gateway');
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  logger.log(`Server running on http://${HOST}:${PORT}`);
}
bootstrap();
