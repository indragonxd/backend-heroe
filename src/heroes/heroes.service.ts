import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Heroe } from './interfaces/heroes.interface';
import {Model} from 'mongoose';
import { HeroeDto } from './dto/heroe.dto';

@Injectable()
export class HeroesService {

    //heroModel recupera el schema y lo convierte en tu interfaz
    constructor(@InjectModel('heroes') private heroeModel : Model<Heroe>){

    }
    async getHeroes():Promise<Heroe[]>{
        const heroes = await this.heroeModel.find();
        return heroes;
    }

    async getHeroe(id : number):Promise<Heroe>{
        const heroe = await this.heroeModel.findById(id);
        return heroe;
    }
    async createHeroe(heroeDto : HeroeDto){
        //le mandas un dto y lo transforma en un schema
        const newHero = new this.heroeModel(heroeDto);
        await newHero.save();
        return newHero;
    }

    async deleteHeroe(id:number):Promise<Heroe>{
        const heroe = await this.heroeModel.findByIdAndDelete(id);
        return heroe;
    }

    async updateProduct(id : number , heroeDto : HeroeDto){
        const heroe = await this.heroeModel.findByIdAndUpdate(id,heroeDto,{new : true});
        return heroe;
    }
}
