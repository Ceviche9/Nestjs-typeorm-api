import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from 'src/infra/http/controllers/client.controller';
import { WalletService } from '../wallet/service/wallet.service';
import { ClientEntity } from './infra/Client.entity';
import { UniqueEmailValidator } from './infra/UniqueEmail.validator';
import { ClientsRepository } from './infra/client.repository';
import { ClientService } from './service/Client.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity])],
  controllers: [ClientController],
  providers: [
    ClientsRepository,
    UniqueEmailValidator,
    ClientService,
    WalletService,
  ],
})
export class ClientModule {}
