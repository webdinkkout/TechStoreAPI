import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getAll() {
    const products = await this.productRepository.find();
    return products;
  }

  async add(productDto: ProductDto): Promise<ProductDto> {
    const product = await this.productRepository.save(productDto);
    return ProductDto.plainToObject(product);
  }

  async destroy(id: number): Promise<boolean> {
    const isDeleted = await this.productRepository.delete(id);
    if (isDeleted.affected) {
      return true;
    }
    return false;
  }
}
