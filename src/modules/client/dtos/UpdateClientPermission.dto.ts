import { IsNotEmpty } from 'class-validator';

export class UpdateClientPermissionDTO {
  @IsNotEmpty()
  permissionId: number;
  @IsNotEmpty()
  clientId: string;
}
