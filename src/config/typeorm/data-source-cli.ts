import 'dotenv/config';
import { ClientEntity } from 'src/modules/client/infra/Client.entity';
import { PermissionEntity } from 'src/modules/permissions/infra/permission.entity';
import { WalletEntity } from 'src/modules/wallet/infra/Wallet.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  entities: [ClientEntity, WalletEntity, PermissionEntity],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  migrationsRun: true,
  parseInt8: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
