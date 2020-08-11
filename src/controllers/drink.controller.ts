import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DrinkService } from '../services/drink.service';
import { CreateDrinkDto } from '../dto/drink.dto';
import { DrinkModel } from '../models/drink.model';
import Any = jasmine.Any;
import { BaseResponseDto } from '../dto/base_response.dto';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from '../models/category.model';

@Controller('drink')
export class DrinkController {
  constructor(private readonly drinkService: DrinkService, private readonly  categoryService: CategoryService) {}

  @Get()
  async getAllDrink(): Promise<DrinkModel[]> {
    return this.drinkService.getListDrink();
  }

  @Get('test')
  async getTestRes(): Promise<BaseResponseDto> {

    const data = await this.drinkService.getListDrink();
    const baseRespons = new BaseResponseDto(true, 'Test', data);
    return baseRespons;
  }

  @Post()
  async create(@Body() createDrinkDto: CreateDrinkDto) {
    return  this.drinkService.addDrink(createDrinkDto);
  }

  @Get('/:id')
  async find(@Param('id') id): Promise<DrinkModel> {
    return this.drinkService.findOne(id);
  }
}
