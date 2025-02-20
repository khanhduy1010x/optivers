import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type FlashcardProgressDocument = FlashcardProgress & Document;


@Schema({ timestamps: true })
export class FlashcardProgress {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user_id: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Flashcard' })
  flashcard_id: Types.ObjectId;

  @Prop()
  last_reviewed_at?: Date;

  @Prop({ default: 0 })
  review_score: number;
}

export const FlashcardProgressSchema = SchemaFactory.createForClass(FlashcardProgress);
