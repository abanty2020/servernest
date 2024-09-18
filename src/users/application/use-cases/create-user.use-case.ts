import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject('UserRepository') 
        private readonly userRepository: UserRepository
    ) { }

    async execute(full_name: string, email: string, password: string): Promise<User> {   

        return this.userRepository.create({
            full_name,
            email,
            password
        });
    }
}