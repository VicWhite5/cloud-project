import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Audit extends Document {
    @Prop({
        unique: true
    })
    id: string;

    @Prop()
    action: string;

    @Prop()
    success: boolean;

    @Prop()
    container: string;
}

export const AuditSchema = SchemaFactory.createForClass(Audit);