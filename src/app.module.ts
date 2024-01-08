import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { PostgresConfigService } from './config/database/postgres.config.service';
import { ClientModule } from './modules/client/client.module';
import { PermissionModule } from './modules/permissions/permission.module';
import { WalletModule } from './modules/wallet/wallet.module';

@Module({
  imports: [
    ClientModule,
    WalletModule,
    PermissionModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
