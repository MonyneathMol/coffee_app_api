import { Injectable } from '@nestjs/common';
import { CreateDrinkDto } from '../dto/drink.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DrinkModel } from '../models/drink.model';

@Injectable()
export class DrinkService {

  constructor(@InjectModel('DrinkModel') private drinkModel: Model<DrinkModel>) {
  }

  async getListDrink(): Promise<DrinkModel[]> {
    return this.drinkModel.find().populate('category').populate('brand');
  }

  async findOne(id: string): Promise<DrinkModel> {
    return this.drinkModel.findOne({ _id: id }).populate('category').populate('brand');
  }

  async addDrink(drinkDto: CreateDrinkDto): Promise<DrinkModel> {
    const newDrink = new this.drinkModel(
      {
        name: drinkDto.name,
        brand: drinkDto.brandId,
        category: drinkDto.categoryId,
        type: drinkDto.type,
        price: drinkDto.price,
        imageURLHot: drinkDto.imageURLHot,
        imageURLIce: drinkDto.imageURLIce,
        imageURLFrappe: drinkDto.imageURLFrappe,
      });
    return newDrink.save();
  }

}
