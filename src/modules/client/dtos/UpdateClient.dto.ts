import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { EmailIsUnique } from '../infra/UniqueEmail.validator';

export class UpdateClientDTO {
  @IsNotEmpty()
  @IsOptional()
  name: string;
  @IsEmail()
  @EmailIsUnique({ message: 'This Email is Already registered' })
  @IsOptional()
  email: string;
}
