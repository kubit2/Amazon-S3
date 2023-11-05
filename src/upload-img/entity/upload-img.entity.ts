import { BaseEntity } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('upload_img')
export class UploadImg extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  originalName: string;

  @Column()
  encoding: string;

  @Column()
  mimeType: string;

  @Column('decimal', { precision: 10, scale: 2 })
  size: number;

  @Column({ comment: 'S3 업로드된 location URL' })
  url: string;
}
