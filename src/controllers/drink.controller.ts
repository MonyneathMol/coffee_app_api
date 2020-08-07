import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { DrinkService } from '../services/drink.service';
import { CreateDrinkDto } from '../dto/drink.dto';
import { DrinkModel } from '../models/drink.model';

@Controller('drink')
export class DrinkController {
  constructor(private readonly drinkService: DrinkService) {}

  @Get()
  async getAllDrink(): Promise<DrinkModel[]> {
    return this.drinkService.getListDrink();
  }

  @Post()
  async create(@Body() createDrinkDto: CreateDrinkDto) {
    return  this.drinkService.addDrink(createDrinkDto);
  }
}
