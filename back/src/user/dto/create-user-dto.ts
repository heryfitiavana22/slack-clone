import { IsEmail } from 'class-validator';
import { CreateUserInput, FindManyUserInput } from 'src/graphql';

export class CreateUserDto extends CreateUserInput {
  @IsEmail({}, { message: 'Enter a valid email' })
  email: string;
}

export class FindUserInput extends FindManyUserInput {
  id?: number;
}
