import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateClientDTO } from 'src/modules/client/dtos/CreateClient.dto';
import { UpdateClientDTO } from 'src/modules/client/dtos/UpdateClient.dto';
import { ClientService } from 'src/modules/client/service/Client.service';
import { CreateWalletDTO } from 'src/modules/wallet/dtos/CreateWallet.dto';
import { WalletEntity } from 'src/modules/wallet/infra/Wallet.entity';
import { WalletService } from 'src/modules/wallet/service/wallet.service';

@Controller('/clients')
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
    private readonly walletService: WalletService,
  ) {}

  @Post()
  async createClient(@Body() clientData: CreateClientDTO) {
    this.clientService.create(clientData);
  }

  @Get('/all')
  async getAllClients() {
    return await this.clientService.getAll();
  }

  @Patch('/:id')
  async updateClient(@Param('id') id: string, @Body() data: UpdateClientDTO) {
    const response = await this.clientService.update(id, data);
    return response;
  }

  @Post('/wallet')
  async createWallet(@Body() data: CreateWalletDTO) {
    const walletEntity = new WalletEntity();
    walletEntity.address = data.address;
    walletEntity.privateKey = data.privateKey;
    walletEntity.client = await this.clientService.findById(data.client_id);
    if (!walletEntity.client) throw new Error('Client not found!');
    await this.walletService.create(walletEntity);
  }
}
