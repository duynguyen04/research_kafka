import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sales')
  approvalSales() {
    return this.appService.approvalSales();
  }
  @Get('purchase')
  approvalPurchase() {
    return this.appService.approvalPurchase();
  }
}
