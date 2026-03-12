import { Controller, Inject } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dtos/create-cart.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @MessagePattern({ cmd: 'add_to_cart' })
  addToCart(body: CreateCartDto) {
    const { userId, productId, quantity } = body;
    return this.cartService.addToCart({ userId, productId, quantity });
  }

  @MessagePattern({ cmd: 'get_user_cart' })
  getCart(userId: number) {
    return this.cartService.getCart(userId);
  }
}
