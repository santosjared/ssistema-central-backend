import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {  

  @Prop({required:false, default:null})
  password?:string;

  @Prop()
  fullName?:string;

  @Prop({ type:[{type: mongoose.Schema.Types.ObjectId, ref:'Rol'}] })
  roles: string[];

  @Prop({ type:[{type: mongoose.Schema.Types.UUID, ref:'App'}] })
  app: string[];

  @Prop()
  token?: string;

  @Prop({ default: 0 })
  failedLoginAttempts: number;

  @Prop({ default: false })
  isLocked: boolean;

  @Prop({ type: Date, default: null })
  lockedUntil: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);