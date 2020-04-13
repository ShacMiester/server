import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { Book } from "../books/book.entity";
import { BooksService } from "../books/books.service";
@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService){}

    @Get()
    getAllBooks(): Promise<Book[]> {
        return this.bookService.getAllBooks();
    }

    @Get(`:id`)
    getBook(@Param() params): string {
        return `book of id ${params.id}`
    }

    @Post()
    insertBook(): string {
        return `book inserted`
    }

    @Put()
    updateBook(): string {
        return `book updated`
    }

    @Delete(`:id`)
    deleteBook(@Param() params): string {
        return `book of id ${params.id} deleted successfully`
    }

}
