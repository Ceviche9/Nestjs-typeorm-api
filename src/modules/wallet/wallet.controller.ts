import { Body, Controller, Post } from '@nestjs/common';
import { WalletEntity } from 'src/modules/wallet/infra/Wallet.entity';
import { WalletService } from 'src/modules/wallet/service/wallet.service';
import { CreateWalletDTO } from './dtos/CreateWallet.dto';

@Controller('/wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  async createClient(@Body() walletData: CreateWalletDTO) {
    const walletEntity = new WalletEntity().createWallet(walletData);
    await this.walletService.create(walletEntity);
  }
}
