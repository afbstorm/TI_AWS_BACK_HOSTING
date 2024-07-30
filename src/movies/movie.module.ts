// src/movies/movies.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesService } from './movie.service';
import { MoviesController } from './movie.controller';
import { Movie } from './movie.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Movie])],
    providers: [MoviesService],
    controllers: [MoviesController],
})
export class MoviesModule {}
