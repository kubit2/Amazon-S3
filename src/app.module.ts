import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './config/mysql/mysql.module';
import { ImageUploadModule } from './upload-img/upload-img.module';

@Module({
  imports: [MysqlModule, ImageUploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
