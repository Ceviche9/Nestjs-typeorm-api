import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from '../client/infra/Client.entity';
import { ClientService } from '../client/service/Client.service';
import { WalletEntity } from './infra/Wallet.entity';
import { WalletService } from './service/wallet.service';

@Module({
  exports: [WalletService],
  imports: [
    TypeOrmModule.forFeature([WalletEntity]),
    TypeOrmModule.forFeature([ClientEntity]),
  ],
  controllers: [],
  providers: [WalletService, ClientService],
})
export class WalletModule {}
