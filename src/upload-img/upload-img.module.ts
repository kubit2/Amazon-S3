import { Module } from '@nestjs/common';
import { ImageUploadController } from './upload-img.controller';
import { ImageUploadService } from './upload-img.service';

@Module({
  controllers: [ImageUploadController],
  providers: [ImageUploadService],
  exports: [ImageUploadService],
})
export class ImageUploadModule {}
