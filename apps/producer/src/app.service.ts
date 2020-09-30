import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { TestMessage } from '@app/models';

@Injectable()
export class AppService {
  constructor(
    @Inject('TESTER_RMQ_CLIENT')
    private client: ClientProxy,
  ) { }

  async sendMessage(
    message: string, numberOfMessages: number,
    processTimeMin: number, processTimeMax: number
  ): Promise<void> {

    for (let index = 1; index <= numberOfMessages; index++) {
      const data: TestMessage = { index, message, processTimeMin, processTimeMax };

      this.client.emit<number>('test-message', data);
    }
  }
}
