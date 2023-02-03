import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NumberService {
  constructor(@Inject('KAFKA_CLIENT') private kafkaClient: ClientKafka) {}

  async generateNumber(): Promise<number> {
    const newNumber = Math.floor(Math.random() * 10);
    await firstValueFrom(
      this.kafkaClient.emit('number', { number: newNumber }),
    );

    return newNumber;
  }
}
