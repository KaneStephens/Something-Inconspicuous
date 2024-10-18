import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('comms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('your-next-delivery/:userId')
  getUserData(@Param('userId') userId: string) {
    return this.appService.getUserData(userId)
  }
}
