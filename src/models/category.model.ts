
import * as mongoose from 'mongoose';
export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});
export class CategoryModel extends mongoose.Document {
  id: string;
  name: string;
}
