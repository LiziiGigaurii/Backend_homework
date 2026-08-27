import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: String })
  name!: string;

  @Prop({ type: Number })
  price!: number;

  @Prop({ type: String })
  description!: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user!: mongoose.Types.ObjectId;
}

export const productSchema = SchemaFactory.createForClass(Product);
