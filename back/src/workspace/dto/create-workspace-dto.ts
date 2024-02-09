import { IsEmail } from 'class-validator';
import { CreateWorkspaceInput } from 'src/graphql';

export class CreateWorkspaceDto extends CreateWorkspaceInput {
  @IsEmail({}, { each: true, message: 'Enter a valid email' })
  usersEmails: string[];
}
