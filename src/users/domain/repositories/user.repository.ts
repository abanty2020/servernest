import { User } from '../entities/user.entity';

export interface UserRepository {
  create(user: { full_name: string, email: string, password: string }): Promise<User>;
}