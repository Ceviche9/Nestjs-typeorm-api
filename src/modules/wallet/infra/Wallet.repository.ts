import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IWalletRepository } from './IWallet.repository';
import { WalletEntity } from './Wallet.entity';

export class WalletRepository implements IWalletRepository {
  constructor(
    @InjectRepository(WalletEntity)
    private readonly walletEntity: Repository<WalletEntity>,
  ) {}

  async create(data: WalletEntity): Promise<void> {
    await this.walletEntity.save(data);
  }
}
