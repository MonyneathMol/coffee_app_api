import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModel, CategorySchema } from '../models/category.model';
import { BrandModel, BrandSchema } from '../models/brand.model';
import { DrinkController } from '../controllers/drink.controller';
import { DrinkService } from '../services/drink.service';
import {  DrinkSchema } from '../models/drink.model';

@Module({
  imports: [
    MongooseModule.forFeature([
    {name: 'DrinkModel', schema: DrinkSchema},
    {name: CategoryModel.name, schema: CategorySchema},
    {name: BrandModel.name, schema: BrandSchema}])],
  controllers: [DrinkController],
  providers: [DrinkService],
})

export class DrinkModule {}
