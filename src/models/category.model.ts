
import * as mongoose from 'mongoose';
import { DrinkSchema } from './drink.model';
import { Schema } from 'mongoose';
export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  drinks: [{ type: Schema.Types.ObjectId, ref: 'DrinkModel' }],
});
export class CategoryModel extends mongoose.Document {
  id: string;
  name: string;
  drinks: [object];
}
