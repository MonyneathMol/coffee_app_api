import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandModel, BrandSchema } from '../models/brand.model';
import { DrinkController } from '../controllers/drink.controller';
import { DrinkService } from '../services/drink.service';
import {  DrinkSchema } from '../models/drink.model';
import { CategorySchema } from '../models/category.model';
import { CategoryController } from '../controllers/category.controller';
import { BrandController } from '../controllers/brand.controller';
import { CategoryService } from '../services/category.service';
import { BrandService } from '../services/brand.service';

@Module({
  imports: [
    MongooseModule.forFeature([
    {name: 'DrinkModel', schema: DrinkSchema},
    {name: 'CategoryModel', schema: CategorySchema},
    {name: 'BrandModel', schema: BrandSchema}])],
  controllers: [DrinkController, CategoryController, BrandController],
  providers: [DrinkService, CategoryService, BrandService],
})

export class DrinkModule {}
