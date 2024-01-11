import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientService } from 'src/modules/client/service/Client.service';
import { Repository } from 'typeorm';
import { IWalletRepository } from '../infra/IWallet.repository';
import { WalletEntity } from '../infra/Wallet.entity';

@Injectable()
export class WalletService implements IWalletRepository {
  constructor(
    @InjectRepository(WalletEntity)
    private readonly walletRepository: Repository<WalletEntity>,
    private readonly clientService: ClientService,
  ) {}

  async create(data: WalletEntity) {
    const client = await this.clientService.findById(data.client.id);
    if (!client) throw new Error('Client not found');
    await this.walletRepository.create(data);
  }
}
