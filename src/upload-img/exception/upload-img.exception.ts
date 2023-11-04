import { HttpException, HttpStatus } from '@nestjs/common';

export class UploadImgException extends HttpException {
  constructor(message: string) {
    super({ message, status: HttpStatus.BAD_REQUEST }, HttpStatus.BAD_REQUEST);
  }
}
