import { Injectable } from '@nestjs/common';
import { Transport, RmqOptions } from '@nestjs/microservices';

import { ConfigService } from '@nestjs/config';

// export const RabbitmqOptions = 'RABBITMQ_OPTIONS';

/**
 * ref: https://docs.nestjs.com/microservices/rabbitmq#overview
 */
@Injectable()
export class RabbitmqOptions implements RmqOptions {
  transport: RmqOptions['transport'] = Transport.RMQ;
  options: RmqOptions['options'] = {
    noAck: false,
    queueOptions: {
      durable: true
    },
  };

  constructor(configService: ConfigService) {
    const { host, port, username, password, ...config } = configService.get('rabbitmq');
    Object.assign(this.options, {
      urls: [`amqp://${username}:${password}@${host}:${port}`],
      queue: config.queueName,
      prefetchCount: config.prefetchCount,
    });
  }
};
