import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandModel } from '../models/brand.model';
import { CategoryService } from '../services/category.service';
import { CategoryDto } from '../dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategory(): Promise<BrandModel[]> {
    return this.categoryService.getListCategory();
  }

  @Post()
  async create(@Body() categoryDto: CategoryDto) {
    return  this.categoryService.addCategory(categoryDto);
  }
}
