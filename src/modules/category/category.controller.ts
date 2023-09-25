import { ResponseData } from 'src/global/class.global';
import { CategoryService } from './category.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CategoryEntity } from 'src/entities/category.entity';
import { HttpMessage } from 'src/constants/http.constant';
import { CategoryDto } from './category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories(): Promise<ResponseData<CategoryEntity[]>> {
    const result = await this.categoryService.getAll();
    return new ResponseData(result, HttpStatus.OK, HttpMessage.SUCCESS);
  }

  @Post('/create')
  async createCategory(
    @Body() categoryDto: CategoryDto,
  ): Promise<ResponseData<CategoryDto>> {
    const result = await this.categoryService.add(categoryDto);
    return new ResponseData(result, HttpStatus.OK, HttpMessage.SUCCESS);
  }

  @Delete('/delete/:id')
  async deleteCategory(
    @Param('id') id: number,
  ): Promise<ResponseData<boolean>> {
    const result = await this.categoryService.destroy(id);
    return new ResponseData(result, HttpStatus.OK, HttpMessage.SUCCESS);
  }
}
