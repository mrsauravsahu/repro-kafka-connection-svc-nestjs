import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { NumberService } from './number.service';
import { KAFKA_CONFIG } from './config/kafka';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_CLIENT',
        ...KAFKA_CONFIG,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [NumberService],
})
export class AppModule {}
