import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './auth.type';
import { User } from 'src/graphql';
import { Hash } from 'src/helpers/hash';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne({ email });
    if (user && Hash.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload: UserPayload = {
      email: user.email,
      name: user.name,
      id: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
