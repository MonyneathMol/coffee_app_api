import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class BrandModel extends Document {
  @Prop()
  id: string;
  @Prop()
  name: string;
}
export const BrandSchema = SchemaFactory.createForClass(BrandModel);
