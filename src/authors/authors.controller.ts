import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AuthorsService } from "../authors/authors.service";
import { Author } from "../authors/author.entity";
@Controller('authors')
export class AuthorsController {
    constructor(private authorsService: AuthorsService) { }
    @Get()
    getAllAuthors(): Promise<Author[]> {
        return this.authorsService.getAuthors();
    }

    @Get(':id')
    getAuthor(@Param() params): any {
        return this.authorsService.getAuthor(params.id);
    }

    @Post()
    insertAuthor(@Body() author: Author) {
        return this.authorsService.insertAuthor(author);
    }

    @Put(':id')
    updateAutor(@Body() Author) {
        console.log(Author)
        return this.authorsService.updateAuthor(Author)
    }

    @Delete(`:id`)
    deleteAuthor(@Param() params) {
        return this.authorsService.deleteAuthor(params.id);
    }
}
