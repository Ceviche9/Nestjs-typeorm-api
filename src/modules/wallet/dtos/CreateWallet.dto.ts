import { IsNotEmpty } from 'class-validator';

export class CreateWalletDTO {
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  privateKey: string;
  @IsNotEmpty()
  client_id: string;
}
