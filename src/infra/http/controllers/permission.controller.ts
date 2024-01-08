import { Body, Controller, Post } from '@nestjs/common';
import { CreatePermissionDTO } from 'src/modules/permissions/dtos/createPermission.dto';
import { PermissionEntity } from 'src/modules/permissions/infra/permission.entity';
import { PermissionService } from 'src/modules/permissions/service/permission.service';

@Controller('/permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  async createPermission(@Body() permissionData: CreatePermissionDTO) {
    const permissionEntity = new PermissionEntity();
    permissionEntity.permission = permissionData.permission;
    this.permissionService.createPermission(permissionEntity);
    return permissionEntity;
  }
}
