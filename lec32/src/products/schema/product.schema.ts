import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Product {

    @Prop({type:String})
    name!:string

    @Prop({type:String})
    description!:string

    @Prop({type:Number})
    price!:number

    @Prop({type:String})
    category!:string

    @Prop({type:String})
    brand!:string

    @Prop({type:Number})
    stock!:number
}

export const productSchema = SchemaFactory.createForClass(Product)