import { Injectable, Put } from '@nestjs/common';
import { Author } from "../authors/author.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
    constructor(@InjectRepository(Author) private authorRepository: Repository<Author>) { }

    async getAuthors(): Promise<Author[]> {
        return await this.authorRepository.find();
    }

    getAuthor(_id: number): Promise<Author> {
        return this.authorRepository.findOne({
            select: ["ID", "Name", "PhoneNumber", "Address"],
            where: [{ "ID": _id }]
        });
    }

    async insertAuthor(author){
        return this.authorRepository.insert(author)
    }

    
    async updateAuthor(author:Author) {
        return this.authorRepository.save(author)
    }

    async deleteAuthor(ID) {
        return await this.authorRepository.delete({ ID: ID })
    }
}
