import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
export type FriendDocument = Friend & Document;

@Schema({ timestamps: true })
export class Friend {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user_id: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  friend_id: Types.ObjectId;

  @Prop({ enum: ['pending', 'accepted', 'blocked'], default: 'pending' })
  status: string;
}

export const FriendSchema = SchemaFactory.createForClass(Friend);

