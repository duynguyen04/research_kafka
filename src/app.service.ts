import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService){}
  async approvalSales() {

    // Sending message by creating topic with message 
    await this.producerService.produce({
      topic: 'sales',
      messages:[{
        value: 'This is Sales'
      }]
    })
    return 'This is Sales';
  }
  async approvalPurchase() {

    // Sending message by creating topic with message 
    await this.producerService.produce({
      topic: 'purchase',
      messages:[{
        value: 'This is Purchase'
      }]
    })
    return 'This is Purchase';
  }
}
