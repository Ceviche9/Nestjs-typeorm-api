import { GetClientDTO } from '../dtos/GetClient.dto';
import { UpdateClientDTO } from '../dtos/UpdateClient.dto';
import { ClientEntity } from './Client.entity';

export interface IClientRepository {
  findById(id: string): Promise<ClientEntity>;
  getAll(): Promise<GetClientDTO[]>;
  create(data: ClientEntity): Promise<void>;
  emailExists(email: string): Promise<boolean>;
  update(id: string, data: Partial<UpdateClientDTO>): Promise<void>;
  updateClientPermission(data: ClientEntity): Promise<void>;
}
