import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { RabbitmqModule } from '@app/rabbitmq';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AppConfig } from './app.config';

@Module({
  imports: [
    ConfigModule.forFeature(AppConfig),
    RabbitmqModule,
  ],
  controllers: [AppController,],
  providers: [AppService,]
})
export class AppModule { }
