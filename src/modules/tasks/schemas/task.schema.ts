import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user_id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ enum: ['pending', 'completed', 'canceled'], default: 'pending' })
  status: string;

  @Prop({ enum: ['low', 'medium', 'high'], default: 'medium' })
  priority: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

