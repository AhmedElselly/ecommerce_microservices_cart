import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { RedisProvider } from 'src/redis/redis.provider';

@Module({
  controllers: [CartController],
  providers: [CartService, RedisProvider],
})
export class CartModule {}
