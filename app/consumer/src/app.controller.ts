import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('number')
  getNumber(@Payload() message: any): void {
    console.log(message);
  }

  @Get()
  getAbout(): { message: string } {
    return { message: 'Consumer service is running' };
  }
}
