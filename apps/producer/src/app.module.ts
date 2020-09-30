import { Inject, Module } from '@nestjs/common';

import { ClientsModule, RmqOptions } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { RabbitmqModule, RabbitmqOptions } from '@app/rabbitmq';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AppConfig } from './app.config';

@Module({
  imports: [
    ConfigModule.forFeature(AppConfig),
    ClientsModule.registerAsync([
      {
        imports: [RabbitmqModule],
        name: 'TESTER_RMQ_CLIENT',
        useFactory: (rabbitmqOptions: RabbitmqOptions): RmqOptions => rabbitmqOptions,
        inject: [RabbitmqOptions],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
