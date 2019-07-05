import { Controller, Get, Res, HttpStatus, Post, Delete, Query, Put, Body, Param } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroeDto } from './dto/heroe.dto';

@Controller('heroes')
export class HeroesController {

    constructor(private heroesService:HeroesService ){}

    @Get('/')
    async getHeroes(@Res() res){
        const heroes = await this.heroesService.getHeroes();
        res.header("Access-Control-Allow-Origin","*");
        return res.status(HttpStatus.OK).json({
                heroes
        })
    }

    @Get('/:id')
    async getHeroe(@Res() res ,@Param('id') id : number){
        const heroe = await this.heroesService.getHeroe(id);
        res.header("Access-Control-Allow-Origin","*");
        res.status(HttpStatus.OK).json({
            heroe
        })
    }

    @Post('/create')
    async createHeroe(@Res() res,@Body() heroeDto : HeroeDto){
        const heroe =await this.heroesService.createHeroe(heroeDto);
        res.header("Access-Control-Allow-Origin","*");
        res.status(HttpStatus.OK).json({
            heroe
        })
    }

    @Delete('/delete')
    async deleteHeroe(@Res()res , @Query('heroeId') id : number ){
        const heroe = await this.heroesService.deleteHeroe(id);
        res.header("Access-Control-Allow-Origin","*");
        res.status(HttpStatus.OK).json({
            heroe
        })
    }

    @Put('/update')
    async updateHero(@Res() res ,@Body() heroDto : HeroeDto , @Query('heroeId') id : number){
        const heroe = await this.heroesService.updateProduct(id,heroDto);
        res.header("Access-Control-Allow-Origin","*");
        res.status(HttpStatus.OK).json({
            heroe
        })
    }


}
