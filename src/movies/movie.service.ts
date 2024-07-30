// src/movies/movies.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private moviesRepository: Repository<Movie>,
    ) {}

    findAll(): Promise<Movie[]> {
        return this.moviesRepository.find();
    }

    findOne(id: number): Promise<Movie> {
        return this.moviesRepository.findOne({ where: { id } });
    }

    async update(id: number, movie: Partial<Movie>): Promise<void> {
        await this.moviesRepository.update(id, movie);
    }
}
