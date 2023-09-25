import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAll(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async add(categoryDto: CategoryDto): Promise<CategoryDto> {
    const category = await this.categoryRepository.save(categoryDto);
    return CategoryDto.plainToObject(category);
  }

  async destroy(id: number): Promise<boolean> {
    const isDeleted = await this.categoryRepository.delete(id);
    if (isDeleted.affected) {
      return true;
    }
    return false;
  }
}
