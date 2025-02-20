import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema({ timestamps: true })
export class Note {
  @Prop({ required: true, type: Types.ObjectId, ref: 'NoteFolder' })
  folder_id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop()
  content?: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);

