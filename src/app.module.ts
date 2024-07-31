import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movie.module';
import { UserModule } from './users/user.module';
import { User } from './users/user.entity';
import { Movie } from './movies/movie.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'database-1.cliqkqm8yhny.eu-west-3.rds.amazonaws.com',
      port: 1433,
      username: 'admin',
      password: 'awstechnifutur',
      database: 'awstechni',
      entities: [User, Movie],
      synchronize: true,
      options: {
        trustServerCertificate: true,
      },
    }),
    UserModule,
    AuthModule,
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
