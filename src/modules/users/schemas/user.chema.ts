import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password_hash?: string;

  @Prop()
  full_name?: string;

  @Prop()
  avatar_url?: string;

  @Prop({ type: String, required: true, unique: true, default: () => new Types.ObjectId().toHexString() })
  user_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
