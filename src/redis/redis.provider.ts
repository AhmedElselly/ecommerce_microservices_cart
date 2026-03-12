import Redis from 'ioredis';

export const RedisPatterns = {
  REDIS_CLIENT: 'REDIS_CLIENT',
};

export const RedisProvider = {
  provide: RedisPatterns.REDIS_CLIENT,
  useFactory: () => {
    return new Redis({
      host: '127.0.0.1',
      port: 6379,
    });
  },
};
