import { WalletEntity } from './Wallet.entity';

export interface IWalletRepository {
  create(data: WalletEntity): Promise<void>;
}
