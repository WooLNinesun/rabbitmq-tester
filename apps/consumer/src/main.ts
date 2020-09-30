import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';

import { RabbitmqOptions } from '@app/rabbitmq';

import { AppModule } from './app.module';

import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  // Create your regular nest application.
  const app = await NestFactory.create(AppModule);

  // Then combine it with a RabbitMQ microservice
  const rabbitmqOptions = app.get<RmqOptions>(RabbitmqOptions);
  app.connectMicroservice<RmqOptions>(rabbitmqOptions);

  await app.startAllMicroservicesAsync();

  console.log(`[consumer]: listening on queue => ${rabbitmqOptions.options.queue}`);
}
bootstrap();
