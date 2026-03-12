import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisPatterns } from 'src/redis/redis.provider';

@Injectable()
export class CartService {
  constructor(@Inject(RedisPatterns.REDIS_CLIENT) private redis: Redis) {}

  async addToCart({
    userId,
    productId,
    quantity,
  }: {
    userId: number;
    productId: number;
    quantity: number;
  }) {
    const cartKey = `cart:${userId}`;
    const cart = await this.redis.get(cartKey);
    let items = cart ? JSON.parse(cart) : [];

    items.push({ productId, quantity });

    await this.redis.set(cartKey, JSON.stringify(items));
    return items;
  }

  async getCart(userId: number) {
    const cartKey = `cart:${userId}`;
    const cart = await this.redis.get(cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  async clearCart(userId: number) {
    await this.redis.del(`cart:${userId}`);
    return { message: 'cart deleted successfully!' };
  }
}
