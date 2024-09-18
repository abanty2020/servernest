import { Module } from '@nestjs/common';
import { PrismaUserRepository } from './infrastructure/persistence/prisma-user.repository';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UserController } from './interfaces/controllers/user.controller';
import { PrismaService } from '../prisma/prisma.services';
// import { JwtModule } from '@nestjs/jwt'; 

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    PrismaService,
    {
      provide: 'UserRepository',   // Cuando se vea "UserRepository", usar PrismaUserRepository
      useClass: PrismaUserRepository,
    },
  ],
  // exports: [PrismaUserRepository], 
})
export class UsersModule {}