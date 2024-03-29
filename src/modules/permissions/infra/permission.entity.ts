import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'permissions' })
export class PermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'permission', length: 20, nullable: false })
  permission: string;
}
