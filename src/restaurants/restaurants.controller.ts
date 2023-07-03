import { Controller, Get, Body, Post, Param, Patch, Delete } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schema/restaurant.schema';
import { createRestaurantDTO } from './dto/create-restaurant.dto';
import { updateRestaurantDTO } from './dto/update-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private restaurantService:RestaurantsService){}

    @Get()
    async getAllRestaurant():Promise<Restaurant[]> {
        return this.restaurantService.getAll()
    }

    @Post()
    async createRestaurant(
        @Body()
        restaurant: createRestaurantDTO
    ): Promise<Restaurant> {
        return this.restaurantService.create(restaurant)
    }

    @Get(':id')
    async getRestaurant(
        @Param('id')
        id:string
    ):Promise<Restaurant>{
        return this.restaurantService.findById(id)
    }

    @Patch(':id')
    async updateRestaurant(
        @Param('id')
        id:string,
        @Body()
        data: updateRestaurantDTO
    ):Promise<Restaurant>{
        await this.restaurantService.findById(id)
        return this.restaurantService.updateById(id, data)
    }

    @Delete(':id')
    async deleteRestaurant(
        @Param('id')
        id:string
    ):Promise<Restaurant>{
        return await this.restaurantService.deleteById(id)
    }
}
