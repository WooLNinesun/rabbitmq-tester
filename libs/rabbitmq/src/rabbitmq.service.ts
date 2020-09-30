import { Injectable } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';

@Injectable()
export class RabbitmqService {
  constructor() { }

  ackSuccess(context: RmqContext): void {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    channel.ack(originalMessage, false);
  }

  ackFail(context: RmqContext): void {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    channel.nack(originalMessage, false, false);
  }
};
