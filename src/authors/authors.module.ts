import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from "../authors/author.entity";
import { AuthorsController } from "../authors/authors.controller";
import { AuthorsService } from './authors.service';
@Module({
    imports:[TypeOrmModule.forFeature([Author])],
    providers:[AuthorsService],
    controllers:[AuthorsController]
})
export class AuthorsModule {
    
}
