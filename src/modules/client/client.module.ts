import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from 'src/infra/http/controllers/client.controller';
import { PermissionModule } from '../permissions/permission.module';
import { WalletModule } from '../wallet/wallet.module';
import { ClientEntity } from './infra/Client.entity';
import { UniqueEmailValidator } from './infra/UniqueEmail.validator';
import { ClientsRepository } from './infra/client.repository';
import { ClientService } from './service/Client.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClientEntity]),
    WalletModule,
    PermissionModule,
  ],
  controllers: [ClientController],
  providers: [ClientsRepository, UniqueEmailValidator, ClientService],
})
export class ClientModule {}
