import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { RabbitMQConfig } from './rabbitmq.config';
import { RabbitmqService } from './rabbitmq.service';
import { RabbitmqOptions } from './rabbitmq.options';
@Module({
  imports: [
    ConfigModule.forFeature(RabbitMQConfig),
  ],
  providers: [
    RabbitmqService,
    RabbitmqOptions,
  ],
  exports: [
    RabbitmqOptions,
    RabbitmqService,
  ]
})
export class RabbitmqModule {}
