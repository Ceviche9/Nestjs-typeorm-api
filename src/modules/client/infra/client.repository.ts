import { Injectable } from '@nestjs/common';
import { UpdateClientDTO } from '../dtos/UpdateClient.dto';
import { ClientEntity } from './Client.entity';
import { IClientRepository } from './IClient.repository';

@Injectable()
export class ClientsRepository implements IClientRepository {
  update(id: string, data: Partial<UpdateClientDTO>): Promise<void> {
    throw new Error('Method not implemented.');
  }
  private clientsModel: ClientEntity[] = [];

  async findById(id: string): Promise<ClientEntity> {
    return this.clientsModel.find((client) => client.id === id);
  }

  async create(data: ClientEntity): Promise<void> {
    this.clientsModel.push(data);
  }

  async getAll(): Promise<ClientEntity[]> {
    return this.clientsModel;
  }

  async emailExists(email: string): Promise<boolean> {
    const clientExists = this.clientsModel.find(
      (client) => client.email === email,
    );
    return clientExists !== undefined;
  }

  // Ao utilizar o Partial, o typescript informa que todoas as propriedades são opcionais
  async updateClient(
    id: string,
    data: Partial<ClientEntity>,
  ): Promise<ClientEntity> {
    const client = this.clientsModel.find((client) => client.id === id);

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      client[key] = value;
    });

    return client;
  }
}
