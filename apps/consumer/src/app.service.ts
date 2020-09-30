import { Injectable } from '@nestjs/common';

import { TestMessage } from '@app/models';

@Injectable()
export class AppService {

  printMessage(date: TestMessage, processTime: number): void {
    const index = date?.index.toString().padStart(5, '-');
    const message = date?.message;

    console.log(`INDEX: ${index}, MSG: ${message}, Time: ${processTime}`);
  }

  async simulateProcessTime(min: number, max: number): Promise<number> {
    const processTime: number = Math.random() * (max - min) + min;

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, processTime);
    });

    return processTime;
  }

}
