import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletModule } from '../wallet/wallet.module';
import { ClientController } from './client.controller';
import { ClientEntity } from './infra/Client.entity';
import { UniqueEmailValidator } from './infra/UniqueEmail.validator';
import { ClientsRepository } from './infra/client.repository';
import { ClientService } from './service/Client.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity]), WalletModule],
  controllers: [ClientController],
  providers: [ClientsRepository, UniqueEmailValidator, ClientService],
})
export class ClientModule {}
