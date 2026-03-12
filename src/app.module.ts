import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { RedisProvider } from './redis/redis.provider';

@Module({
  imports: [CartModule],
  controllers: [AppController],
  providers: [AppService, RedisProvider],
})
export class AppModule {}
