import { Injectable, Get, Post, Put, Delete } from '@nestjs/common';
import { Book } from "../books/book.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) { }

    @Get()
    getAllBooks(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    @Post()
    insertBook() { }

    @Put()
    updateBook() { }

    @Delete()
    removeBook() { }

    @Get()
    getBook(id): Promise<Book> {
        return this.bookRepository.findOne(id);
    }
}
