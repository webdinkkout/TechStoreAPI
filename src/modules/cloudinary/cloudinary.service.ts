import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async uploadFile(file: Express.Multer.File) {
    if (file) {
      const res = await cloudinary.uploader.upload(file.path, (err) => {
        if (err) {
          console.log('err ->', err);
        }
      });
      if (!res) {
        return false;
      }
      return {
        secureUrl: res.secure_url,
        imgId: res.public_id,
      };
    }
  }
}
