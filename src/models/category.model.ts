import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class CategoryModel extends Document {
  @Prop()
  id: string;
  @Prop()
  name: string;
}
export const CategorySchema = SchemaFactory.createForClass(CategoryModel);
