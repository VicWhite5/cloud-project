import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
@Schema()
export class Raman extends Document{

    @Prop({
        unique: true
    })
    id: string;

    @Prop({
        unique: true
    })
    name: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop({
        type: Number,
        enum: [1, 2, 3, 4, 5],
        default: 1
    })
    spice_level: number;

    @Prop({default: false})
    isDeleted: boolean;

}

export const RamenSchema = SchemaFactory.createForClass(Raman);
