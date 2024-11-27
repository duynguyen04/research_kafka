import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConsumerService } from "./consumer.service";

@Injectable()
export class HelloConsumer implements OnModuleInit {
    constructor(private readonly consumerService: ConsumerService) { }

    async onModuleInit() {

        // Consume Data with Spcific topic
        await this.consumerService.consume(
            { topics: ['sales', 'purchase'] },
            {
                eachMessage: async ({ topic, partition, message }) => {
                    console.log({
                        value: message.value.toString(),
                        topic: topic.toString(),
                        partition: partition.toString(),
                    })
                    if (topic === 'sales') {
                        await this.handleSalesMessage(message.value.toString());
                    } else if (topic === 'purchase') {
                        await this.handlePurchaseMessage(message.value.toString());
                    }
                }

            }
        )
    }
    private async handleSalesMessage(message: string) {
        console.log('Handling sales message:', message);
    }
    private async handlePurchaseMessage(message: string) {
        console.log('Handling purchase message:', message);
    }

}