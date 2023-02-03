import { Controller, Get } from '@nestjs/common';
import { NumberService } from './number.service';

@Controller()
export class AppController {
  constructor(private readonly appService: NumberService) {}

  @Get()
  async getHello(): Promise<{ number: number }> {
    const generatedNumber = await this.appService.generateNumber();
    return {
      number: generatedNumber,
    };
  }
}
