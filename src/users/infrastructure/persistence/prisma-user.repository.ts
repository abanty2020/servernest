import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.services';
import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(user: { full_name: string; email: string; password: string }): Promise<User> {
        const createdUser = await this.prisma.users.create({
            data: {
                full_name: user.full_name,
                email: user.email,
                password: user.password,
            },
        });

        return new User(
            createdUser.id,               
            createdUser.full_name,        
            createdUser.age,              
            createdUser.email,           
            createdUser.password,         
            createdUser.avatar,          
            createdUser.created_at,      
            createdUser.updated_at,    
            createdUser.state            
        );
    }
}