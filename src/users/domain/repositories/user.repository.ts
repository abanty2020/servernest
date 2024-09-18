import { User } from '../entities/user.entity';

export interface UserRepository {
  create(user: { fullName: string, email: string, password: string }): Promise<User>;
}