import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { FindManyUserInput, UpdateUserInput } from 'src/graphql';
import { CreateUserDto } from './dto/create-user-dto';
import { Public } from 'src/auth/auth.decorator';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Mutation('createUser')
  create(@Args('createUserInput') createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Query('users')
  findAll(@Args('findManyUserInput') query: FindManyUserInput) {
    return this.userService.findAll(query);
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne({ id });
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}
