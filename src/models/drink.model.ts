import * as mongoose from 'mongoose';
import { BaseResponseDto } from '../dto/base_response.dto';
import { Schema } from 'mongoose';
import { CategorySchema } from './category.model';

export const DrinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: Schema.Types.ObjectId, ref: 'BrandModel' },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  imageURLHot: { type: String, required: false },
  imageURLIce: { type: String, required: false },
  imageURLFrappe: { type: String, required: false },
  category: { type: Schema.Types.ObjectId, ref: 'CategoryModel' },
});

export interface DrinkModel extends mongoose.Document {
  name: string;
  type: number;
  price: number;
  imageURLHot: string;
  imageURLIce: string;
  imageURLFrappe: string;
  brand: object;
  category: object;
}
