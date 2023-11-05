import { Module } from '@nestjs/common';
import { ImageUploadController } from './upload-img.controller';
import { ImageUploadService } from './upload-img.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadImg } from './entity/upload-img.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UploadImg])],
  controllers: [ImageUploadController],
  providers: [ImageUploadService],
})
export class ImageUploadModule {}
