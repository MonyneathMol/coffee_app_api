import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandModel } from '../models/brand.model';
import { BrandService } from '../services/brand.service';
import { BrandDto } from '../dto/brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  async getAllBrand(): Promise<BrandModel[]> {
    return this.brandService.getListBrand();
  }

  @Post()
  async create(@Body() createBrandDTO: BrandDto) {
    return  this.brandService.addBrand(createBrandDTO);
  }
}
