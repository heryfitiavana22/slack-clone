import { IsEmail } from 'class-validator';
import { CreateUserInput } from 'src/graphql';

export class CreateUserDto extends CreateUserInput {
  @IsEmail({}, { message: 'Enter a valid email' })
  email: string;
}
