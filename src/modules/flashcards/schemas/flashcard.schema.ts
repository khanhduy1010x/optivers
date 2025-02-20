import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type FlashcardDocument = Flashcard & Document;

@Schema({ timestamps: true })
export class Flashcard {
  @Prop({ required: true, type: Types.ObjectId, ref: 'FlashcardDeck' })
  deck_id: Types.ObjectId;

  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  answer: string;
}

export const FlashcardSchema = SchemaFactory.createForClass(Flashcard);
