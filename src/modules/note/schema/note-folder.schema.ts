import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';

export type NoteFolderDocument = NoteFolder & Document;

@Schema({ timestamps: true })
export class NoteFolder {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'NoteFolder' })
  parent_folder_id?: Types.ObjectId;

  @Prop({ required: true })
  name: string;
}

export const NoteFolderSchema = SchemaFactory.createForClass(NoteFolder);

