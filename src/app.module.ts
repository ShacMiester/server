import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsController } from './tags/tags.controller';
import { BooksController } from './books/books.controller';
import { AuthorsController } from './authors/authors.controller';
import { BookHasTagController } from '../src/book-has-tag/book-has-tag.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { TagsModule } from './tags/tags.module';
import { BookHasTagModule } from './book-has-tag/book-has-tag.module';
import { AuthorsService } from "src/authors/authors.service";
import { Author } from "src/authors/author.entity";
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'Library',
    entities: [__dirname + '/**/*.entity{.ts,.js}']
  }),AuthorsModule,TagsModule,BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
