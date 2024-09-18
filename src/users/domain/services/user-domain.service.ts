// src/users/domain/services/user-domain.service.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UserDomainService {
  constructor(private readonly userRepository: UserRepository) {}


}