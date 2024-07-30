// src/movies/movies.controller.ts
import { Controller, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { MoviesService } from './movie.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MoviesController {
    constructor(private moviesService: MoviesService) {
    }

    @Get()
    findAll() {
        return this.moviesService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() movie: any) {
        return this.moviesService.update(id, movie);
    }
}
