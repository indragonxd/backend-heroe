import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {HeroesSchema} from './schema/heroes.schema'
@Module({
  imports : [
    MongooseModule.forFeature([
      {name : 'heroes' , schema : HeroesSchema}
    ])
  ],
  providers: [HeroesService],
  controllers: [HeroesController]
})
export class HeroesModule {}
