import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletModule } from '../wallet/wallet.module';
import { ClientController } from './client.controller';
import { ClientEntity } from './infra/Client.entity';
import { UniqueEmailValidator } from './infra/UniqueEmail.validator';
import { ClientService } from './service/Client.service';

@Module({
  exports: [ClientService],
  imports: [TypeOrmModule.forFeature([ClientEntity]), WalletModule],
  controllers: [ClientController],
  providers: [UniqueEmailValidator, ClientService],
})
export class ClientModule {}
