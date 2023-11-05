import { IsNumber, IsString } from 'class-validator';

export class UploadImgDto {
  @IsString()
  originalName: string;

  @IsString()
  encoding: string;

  @IsString()
  mimeType: string;

  @IsNumber()
  size: number;

  @IsString()
  url: string;
}
