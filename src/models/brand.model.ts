
import * as mongoose from 'mongoose';
export const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
export class BrandModel extends mongoose.Document {
  id: string;
  name: string;
}
