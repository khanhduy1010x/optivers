import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type FlashcardDeckDocument = FlashcardDeck & Document;

@Schema({ timestamps: true })
export class FlashcardDeck {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user_id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;
}

export const FlashcardDeckSchema = SchemaFactory.createForClass(FlashcardDeck);

