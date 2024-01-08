import { IsNotEmpty } from 'class-validator';

export class CreatePermissionDTO {
  @IsNotEmpty()
  permission: string;
}
