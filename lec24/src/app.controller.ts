import { Controller, DefaultValuePipe, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/wishlist')
  getWishlistByLang(@Query('lang', new DefaultValuePipe('ge')) lang: string) {
    return this.appService.getWishlistByLang(lang);
  }
}
