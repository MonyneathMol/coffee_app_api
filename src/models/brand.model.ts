
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
export const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  drinks: [{ type: Schema.Types.ObjectId, ref: 'DrinkModel' }],
});
export class BrandModel extends mongoose.Document {
  id: string;
  name: string;
}
