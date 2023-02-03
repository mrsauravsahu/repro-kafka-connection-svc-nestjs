import { KafkaOptions, Transport } from '@nestjs/microservices';
import { SASLOptions } from 'kafkajs';

export const KAFKA_CONFIG: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    consumer: { groupId: process.env.SERVICE },
    client: {
      ...(process.env.ID !== '' ? { clientId: process.env.ID } : {}),
      brokers: process.env.KAFKA_URLS.split(','),
      ...(process.env.PLATFORM === 'local'
        ? {}
        : {
            ssl: true,
            sasl: {
              username: process.env.SASL_USERNAME,
              password: process.env.SASL_PASSWORD,
              mechanism: process.env.SASL_MECHANISM,
            } as SASLOptions,
          }),
    },
  },
};
