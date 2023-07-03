import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
    FAST_FOOD = 'fast food',
    COFFEE = 'coffee',
    FINE_DINNING = 'fine dinning'
}

@Schema()
export class Restaurant {
    
    @Prop()
    name: string;

    @Prop()
    description: string

    @Prop()
    email: string

    @Prop()
    phone: number

    @Prop()
    address: string

    @Prop()
    category: Category

    @Prop()
    images?: object[]
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant)
