import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignupUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  public async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { email: email },
    });
    return user;
  }

  public create(userData: SignupUserDto): Promise<User> {
    const user = new User();
    user.email = userData.email;
    user.user_name = userData.user_name;
    user.phone_number = userData.phone_number;
    user.password = userData.password;

    return this.repository.save(user);
  }
}
