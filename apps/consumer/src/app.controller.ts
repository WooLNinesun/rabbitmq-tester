import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';

import { AppService } from './app.service';
import { RabbitmqService } from '@app/rabbitmq';

import { TestMessage } from '@app/models';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private rabbitmqService: RabbitmqService,
  ) { }

  @MessagePattern('test-message')
  async printMessage(
    @Payload() data: TestMessage, @Ctx() context: RmqContext) {

    const processTime = await this.appService
      .simulateProcessTime(data.processTimeMin, data.processTimeMax);

    this.appService.printMessage(data, processTime);

    this.rabbitmqService.ackSuccess(context);
  }
}
