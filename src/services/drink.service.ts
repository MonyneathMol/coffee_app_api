import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { CreateDrinkDto } from '../dto/drink.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DrinkModel } from '../models/drink.model';
@Injectable()
export class DrinkService {

  constructor(@InjectModel('DrinkModel') private drinkModel: Model<DrinkModel>) {
  }
  async getListDrink(): Promise<DrinkModel[]> {
    return this.drinkModel.find().exec();
  }

  async addDrink(drinkDto: CreateDrinkDto): Promise<DrinkModel> {
    const newDrink = new this.drinkModel(
      {
        name: drinkDto.name,
        brandId: drinkDto.brandID,
        categoryId: drinkDto.categoryId,
        type: drinkDto.type,
        price: drinkDto.price,
        imageURLHot: drinkDto.imageURLHot,
        imageURLIce: drinkDto.imageURLIce,
        imageURLFrappe: drinkDto.imageURLFrappe,
      });
    const  result = newDrink.save();
    return result;
  }

}
