import { PermissionEntity } from 'src/modules/permissions/infra/permission.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'clients' })
export class ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'name', length: 50, nullable: false })
  name: string;
  @Column({ name: 'email', length: 30, nullable: false })
  email: string;

  @ManyToMany(() => PermissionEntity)
  @JoinTable({ name: 'client_permissions' })
  permissions: PermissionEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
