import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(Logger))
  app.useGlobalPipes(new ValidationPipe())
  const port = process.env.PORT ?? 3000
  await app.listen(port)
  app.get(Logger).log(`Application is running on port ${port}`)
}
bootstrap()
