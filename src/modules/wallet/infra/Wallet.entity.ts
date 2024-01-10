import { ClientEntity } from 'src/modules/client/infra/Client.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CreateWalletDTO } from '../dtos/CreateWallet.dto';

@Entity({ name: 'wallets' })
export class WalletEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'address', length: 100, nullable: false })
  address: string;
  @Column({ name: 'private_key', length: 100, nullable: false, default: '' })
  privateKey: string;

  @OneToOne(() => ClientEntity)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  public createWallet(data: CreateWalletDTO) {
    const walletEntity = new WalletEntity();
    walletEntity.address = data.address;
    walletEntity.privateKey = data.privateKey;
    walletEntity.client.id = data.client_id;
    return walletEntity;
  }
}
