import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetClientDTO } from '../dtos/GetClient.dto';
import { UpdateClientDTO } from '../dtos/UpdateClient.dto';
import { ClientEntity } from '../infra/Client.entity';
import { IClientRepository } from '../infra/IClient.repository';

@Injectable()
// Por ser uma POC, estou permitindo que o service tenha uma comunicação direta com a ORM.
export class ClientService implements IClientRepository {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async updateClientPermission(data: ClientEntity): Promise<void> {
    await this.clientRepository.save(data);
  }

  async findById(id: string): Promise<ClientEntity> {
    return await this.clientRepository.findOneBy({
      id,
    });
  }

  emailExists(email: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async update(id: string, data: Partial<UpdateClientDTO>): Promise<void> {
    await this.clientRepository.update(id, data);
  }

  async create(data: ClientEntity) {
    await this.clientRepository.save(data);
  }

  async getAll(): Promise<GetClientDTO[]> {
    const clients = await this.clientRepository.find();
    const clientsList = clients.map(
      (client) => new GetClientDTO(client.id, client.name),
    );
    return clientsList;
  }
}
