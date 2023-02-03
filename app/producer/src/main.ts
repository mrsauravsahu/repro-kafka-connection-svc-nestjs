import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { KAFKA_CONFIG } from './config/kafka';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(KAFKA_CONFIG);

  await app.startAllMicroservices();
  await app.listen(process.env.PORT || 80, '0.0.0.0');
  console.log(`Service listening at ${await app.getUrl()}`);
}
bootstrap();
