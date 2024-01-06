import { IsEmail, IsNotEmpty } from 'class-validator';
import { EmailIsUnique } from '../infra/UniqueEmail.validator';

export class CreateClientDTO {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @EmailIsUnique({ message: 'This Email is Already registered' })
  email: string;
}
