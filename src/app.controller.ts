import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Indicator } from './types';
import { CodeCountryDto } from './dtos/codeCountry.dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('indicator-kpi')
  getIndicators(): Indicator {
    return this.appService.getIndicators();
  }

  @Post('country-kpi')
  getCountryKpi(@Body() payload: CodeCountryDto): boolean {
    console.log(payload);
    return true;
  }
}
