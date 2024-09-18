import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject('UserRepository')  // Esto indica que use el token "UserRepository"
        private readonly userRepository: UserRepository
    ) { }

    async execute(fullName: string, email: string, password: string): Promise<User> {

        const hashedPassword = await bcrypt.hash(password, 10);

        return this.userRepository.create({
            fullName,
            email,
            password: hashedPassword
        });
    }
}