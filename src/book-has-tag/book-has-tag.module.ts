import { Module, Controller } from '@nestjs/common';
import { BookHasTagService } from './book-has-tag.service';
import { BookHasTagController } from "../book-has-tag/book-has-tag.controller";
import { BookHasTags } from "../book-has-tag/book-has-tags.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from 'src/books/books.controller';
@Module({
  imports:[TypeOrmModule.forFeature([BookHasTags])],
  controllers:[BooksController],
  providers: [BookHasTagService]
})
export class BookHasTagModule {
    
}
