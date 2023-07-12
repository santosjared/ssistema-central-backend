import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type PermissionDocument = HydratedDocument<Permission>

@Schema()
export class Permission {
  @Prop({ required: true })
  permissionName:string
}
export const PermissionSchema = SchemaFactory.createForClass(Permission)

