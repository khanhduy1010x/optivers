import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserSessionDocument = UserSession & Document;

@Schema({ timestamps: true })
export class UserSession {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user_id: Types.ObjectId;

  @Prop()
  device_info?: string;

  @Prop()
  ip_address?: string;

  @Prop()
  refresh_token?: string;

  @Prop()
  access_token?: string;
}

export const UserSessionSchema = SchemaFactory.createForClass(UserSession);

