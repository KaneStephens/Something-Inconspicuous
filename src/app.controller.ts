import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('comms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('your-next-delivery/:userId')
  getNextDelivery(@Param('userId') userId: string) {
    return this.appService.getNextDelivery(userId)
  }
}
