import { Category } from "../schema/restaurant.schema";

export class createRestaurantDTO{
    readonly name: string;
    readonly description: string
    readonly email: string
    readonly phone: number
    readonly address: string
    readonly category: Category

}