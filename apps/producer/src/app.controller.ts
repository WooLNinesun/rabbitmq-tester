import { Controller, Get } from '@nestjs/common';
import { Req, Res, HttpStatus } from '@nestjs/common';

import { AppService } from './app.service';

import * as express from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Get('/send')
  // --- handler
  async uploadFile
    (@Req() request: express.Request, @Res() response: express.Response): Promise<any> {

    const message = request.query['message']?.toString() ?? 'Hello World!';
    const numberOfMessages = request.query['numberOfMessages']
      ? +request.query['numberOfMessages'].toString()
      : 1;
    const processTimeMin = request.query['processTimeMin']
      ? +request.query['processTimeMin'].toString()
      : 20;
    const processTimeMax = request.query['processTimeMax']
      ? +request.query['processTimeMax'].toString()
      : 200;

    await this.appService
      .sendMessage(message, numberOfMessages, processTimeMin, processTimeMax);

    return response.sendStatus(HttpStatus.CREATED);
  }
}
