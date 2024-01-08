import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionEntity } from '../infra/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(PermissionEntity)
    private readonly permissionRepository: Repository<PermissionEntity>,
  ) {}

  async findById(id: number): Promise<PermissionEntity> {
    return await this.permissionRepository.findOneBy({
      id,
    });
  }

  async createPermission(data: PermissionEntity) {
    await this.permissionRepository.save(data);
  }
}
