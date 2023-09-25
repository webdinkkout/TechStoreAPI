import { CloudinaryService } from './../cloudinary/cloudinary.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { HttpMessage } from 'src/constants/http.constant';
import { ResponseData } from 'src/global/class.global';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { createDiskStorage } from 'src/global/upload.global';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly cloudniaryService: CloudinaryService,
  ) {}
  @Get()
  async getAllProducts() {
    const result = await this.productService.getAll();
    return new ResponseData(result, HttpStatus.OK, HttpMessage.SUCCESS);
  }

  @Post('/create')
  @UseInterceptors(
    FileInterceptor('file', createDiskStorage({ path: 'images/posts' })),
  )
  async createProduct(
    @Body() productDto: ProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const isUploaded = await this.cloudniaryService.uploadFile(file);

    if (isUploaded) {
      productDto.thumbnail = isUploaded.secureUrl;
      productDto.idImg = isUploaded.imgId;
    }

    const result = await this.productService.add(productDto);
    return new ResponseData(result, HttpStatus.OK, HttpMessage.SUCCESS);
  }
}
