import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BrandModel } from '../models/brand.model';
import { BrandDto } from '../dto/brand.dto';
import { CategoryModel } from '../models/category.model';
import { CategoryDto } from '../dto/category.dto';

@Injectable()
export class CategoryService {

  constructor(@InjectModel('CategoryModel') private categoryModel: Model<CategoryModel>) {
  }
  async getListCategory(): Promise<CategoryModel[]> {
    return this.categoryModel.find().exec();
  }

  async getCategoryByID(id: string): Promise<CategoryModel> {
  return this.categoryModel.findById(id).findOne();
  }

  async addCategory(categoryDto: CategoryDto): Promise<CategoryDto> {
    const netCategory = new this.categoryModel(
      {
        name: categoryDto.name,
      });
    const  result = netCategory.save();
    return result;
  }

}
