import { Injectable } from '@nestjs/common';
import { ClientService } from 'src/modules/client/service/Client.service';
import { WalletEntity } from '../infra/Wallet.entity';
import { WalletRepository } from '../infra/Wallet.repository';

@Injectable()
export class WalletService {
  constructor(
    private readonly walletRepository: WalletRepository,
    private readonly clientService: ClientService,
  ) {}

  async create(data: WalletEntity) {
    const client = await this.clientService.findById(data.client.id);
    if (!client) throw new Error('Client not found');
    await this.walletRepository.create(data);
  }
}
