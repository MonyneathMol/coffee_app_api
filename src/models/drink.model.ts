import * as mongoose from 'mongoose';

export const DrinkSchema = new mongoose.Schema( {
  name: { type: String, required: true },
  brandId: { type: String, required: true },
  categoryId: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  imageURLHot: { type: String, required: true },
  imageURLIce: { type: String, required: true },
  imageURLFrappe: { type: String, required: true },
})

export interface DrinkModel extends  mongoose.Document {
  id: string;
  name: string;
  brandId: string;
  categoryId: string;
  type: number;
  price: number;
  imageURLHot: string;
  imageURLIce: string;
  imageURLFrappe: string;
}
