import { Controller, Get, Res, HttpStatus, Post, Delete, Query, Put, Body, Param } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroeDto } from './dto/heroe.dto';

@Controller('heroes')
export class HeroesController {

    constructor(private heroesService:HeroesService ){}

    @Get('/')
    async getHeroes(@Res() res){
        const heroes = await this.heroesService.getHeroes();
        return res.status(HttpStatus.OK).json({
            heroes
        })
    }

    @Get('/:id')
    async getHeroe(@Res() res ,@Param('id') id : number){
        const heroe = await this.heroesService.getHeroe(id);
        res.status(HttpStatus.OK).json({
            mensaje : 'heroe enviado',
            valor : heroe
        })
    }

    @Post('/create')
    async createHeroe(@Res() res,@Body() heroeDto : HeroeDto){
        const hero =await this.heroesService.createHeroe(heroeDto);
        res.status(HttpStatus.OK).json({
            mensaje : 'se creo un heroe',
            valor : hero
        })
    }

    @Delete('/delete')
    async deleteHeroe(@Res()res , @Query('heroeId') id : number ){
        const heroe = await this.heroesService.deleteHeroe(id);
        res.status(HttpStatus.OK).json({
            mensaje : 'heroe eliminado',
            valor : heroe
        })
    }

    @Put('/update')
    async updateHero(@Res() res ,@Body() heroDto : HeroeDto , @Query('heroeId') id : number){
        const hero = await this.heroesService.updateProduct(id,heroDto);
        res.status(HttpStatus.OK).json({
            mensaje : 'se actualizo',
            valor : hero
        })
    }


}
