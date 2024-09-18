import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserUseCase } from '../../application/use-cases/create-user.use-case';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase
  ) { }

  @Post('add')
  async addUser(@Body() body: { fullName: string; email: string; password: string }) {
    try {
      const user = await this.createUserUseCase.execute(body.fullName, body.email, body.password);
      return user;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}