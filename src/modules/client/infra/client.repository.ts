import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateClientDTO } from '../dtos/UpdateClient.dto';
import { ClientEntity } from './Client.entity';
import { IClientRepository } from './IClient.repository';

@Injectable()
export class ClientsRepository implements IClientRepository {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientEntity: Repository<ClientEntity>,
  ) {}

  async findById(id: string): Promise<ClientEntity> {
    return await this.clientEntity.findOneBy({
      id,
    });
  }
  async getAll(): Promise<ClientEntity[]> {
    return await this.clientEntity.find();
  }

  async create(data: ClientEntity): Promise<void> {
    await this.clientEntity.save(data);
  }

  async emailExists(email: string): Promise<ClientEntity> {
    const client = await this.clientEntity.findOneBy({
      email,
    });

    return client;
  }

  async update(id: string, data: Partial<UpdateClientDTO>): Promise<void> {
    await this.clientEntity.update(id, data);
  }
}
