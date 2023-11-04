import { Module } from '@nestjs/common';
import { ImageUploadModule } from './upload-img/upload-img.module';
import { ImageUploadController } from './upload-img/upload-img.controller';
import { ImageUploadService } from './upload-img/upload-img.service';

@Module({
  imports: [ImageUploadModule],
  controllers: [ImageUploadController],
  providers: [ImageUploadService],
})
export class AppModule {}
