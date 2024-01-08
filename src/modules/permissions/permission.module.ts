import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionController } from 'src/infra/http/controllers/permission.controller';
import { PermissionEntity } from './infra/permission.entity';
import { PermissionService } from './service/permission.service';

@Module({
  exports: [PermissionService],
  imports: [TypeOrmModule.forFeature([PermissionEntity])],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {}
