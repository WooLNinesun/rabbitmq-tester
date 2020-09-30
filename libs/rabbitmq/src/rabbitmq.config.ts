import { registerAs } from '@nestjs/config';

export const RabbitMQConfig = registerAs('rabbitmq', () => ({
  host: process.env.RABBITMQ_HOST,
  port: +process.env.RABBITMQ_PORT || 5672,
  username: process.env.RABBITMQ_USERNAME,
  password: process.env.RABBITMQ_PASSWORD,
  queueName: process.env.RABBITMQ_QUEUE_NAME,
  prefetchCount: +process.env.RABBITMQ_PREFETCH_COUNT,
}));
