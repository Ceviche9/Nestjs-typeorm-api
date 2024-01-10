import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from './infra/Wallet.entity';
import { WalletRepository } from './infra/Wallet.repository';
import { WalletService } from './service/wallet.service';

@Module({
  exports: [WalletService],
  imports: [TypeOrmModule.forFeature([WalletEntity])],
  controllers: [],
  providers: [WalletService, WalletRepository],
})
export class WalletModule {}
