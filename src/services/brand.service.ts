import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDrinkDto } from '../dto/drink.dto';
import { BrandModel } from '../models/brand.model';
import { BrandDto } from '../dto/brand.dto';

@Injectable()
export class BrandService {

  constructor(@InjectModel('BrandModel') private brandModel: Model<BrandModel>) {
  }
  async getListBrand(): Promise<BrandModel[]> {
    return this.brandModel.find().exec();
  }

  async addBrand(brandDto: BrandDto): Promise<BrandModel> {
    const newBrand = new this.brandModel(
      {
        name: brandDto.name,
      });
    const  result = newBrand.save();
    return result;
  }

}
