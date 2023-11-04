import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadService } from './upload-img.service';

@Controller()
export class ImageUploadController {
  constructor(private readonly imageUploadService: ImageUploadService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    try {
      const response = await this.imageUploadService.uploadfile(file);
      return response;
    } catch (error) {
      console.error(error);
      return { message: 'Failed to upload image file', error };
    }
  }
}
