import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './schema/restaurant.schema';
import mongoose from 'mongoose';

@Injectable()
export class RestaurantsService {
    constructor (
        @InjectModel(Restaurant.name)
        private restaurantModel:mongoose.Model<Restaurant>
    ){}
    // Get All restaurants 
    async getAll(): Promise<Restaurant[]>{
            const restaurant = await this.restaurantModel.find({})
            return restaurant
    }

    async create(restaurant:Restaurant): Promise<Restaurant>{
            const result = await this.restaurantModel.create(restaurant)
            return result
    }

    async findById(id:string): Promise<Restaurant> {
            const restaurant = await this.restaurantModel.findById(id)
            if (!restaurant) {
                throw new NotFoundException('resturant not found')
            }
            return restaurant
    }
    
    async updateById(id:string, restaurant:Restaurant): Promise<Restaurant>{
        return await this.restaurantModel.findByIdAndUpdate(id, restaurant, {
            new:true,
            runValidators:true
        })
    }

    async deleteById(id:string): Promise<Restaurant>{
        return await this.restaurantModel.findByIdAndDelete(id)
    }
}
