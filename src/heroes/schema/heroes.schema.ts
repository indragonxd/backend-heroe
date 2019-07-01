import {Schema} from 'mongoose';

export const HeroesSchema = new Schema({
    nombre : String,
    biografia : String,
    poder : String,
    fotoUrl : String,
    casa : String
})