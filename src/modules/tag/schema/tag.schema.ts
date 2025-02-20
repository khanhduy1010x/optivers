import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


export type TagDocument = Tag & Document;

@Schema({ timestamps: true })
export class Tag {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user_id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ default: '#000000' })
  color?: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
