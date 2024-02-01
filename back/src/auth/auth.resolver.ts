import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from 'src/graphql';
import { CurrentUser, Public } from './auth.decorator';
import { UnauthorizedException } from '@nestjs/common';
import { UserPayload } from './auth.type';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation('login')
  async login(@Args('loginInput') loginInput: LoginInput) {
    const user = await this.authService.validateUser(
      loginInput.email,
      loginInput.password,
    );
    if (!user) throw new UnauthorizedException();

    return this.authService.login(user);
  }

  @Query('me')
  findAll(@CurrentUser() user: UserPayload) {
    console.log('user');
    console.log(user);

    return user;
  }
}
