import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateClientDTO } from '../dtos/CreateClient.dto';
import { GetClientDTO } from '../dtos/GetClient.dto';
import { UpdateClientDTO } from '../dtos/UpdateClient.dto';
import { ClientEntity } from '../infra/Client.entity';
import { IClientRepository } from '../infra/IClient.repository';

@Injectable()
// Por ser uma POC, estou permitindo que o service tenha uma comunicação direta com a ORM.
export class ClientService implements IClientRepository {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientsRepository: Repository<ClientEntity>,
  ) {}

  async emailExists(email: string): Promise<ClientEntity> {
    const client = await this.clientsRepository.findOneBy({
      email,
    });

    return client;
  }

  async findById(id: string): Promise<ClientEntity> {
    return await this.clientsRepository.findOneBy({
      id,
    });
  }

  async update(id: string, data: Partial<UpdateClientDTO>): Promise<void> {
    await this.clientsRepository.update(id, data);
  }

  async create(data: CreateClientDTO): Promise<void> {
    const clientEntity = new ClientEntity();
    clientEntity.id = uuid();
    clientEntity.name = data.name;
    clientEntity.email = data.email;
    await this.clientsRepository.create(clientEntity);
  }

  async getAll(): Promise<GetClientDTO[]> {
    const clients = await this.clientsRepository.find();
    const clientsList = clients.map(
      (client) => new GetClientDTO(client.id, client.name),
    );
    return clientsList;
  }
}
