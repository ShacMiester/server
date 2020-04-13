import { Injectable } from '@nestjs/common';
import { Tag } from "../tags/tag.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
    constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) { }
    async getTags(): Promise<Tag[]> {
        return await this.tagRepository.find();
    }

    async getTag(id): Promise<Tag> {
        console.log('id is')
        console.log(id)
        return await this.tagRepository.findOne(
            {
                select: ["ID", 'Name', "Color"],
                where: [{ "ID": id }]
            }
        );
    }

    async insertTag(tag): Promise<Tag> {
        return await this.tagRepository.save(tag);
    }

    async deleteTag(id) {
        return await this.tagRepository.delete({ ID: id });
    }

    async updateTag(tag): Promise<Tag> {
        return await this.tagRepository.save(tag);
    }

}
