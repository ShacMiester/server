import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { Tag } from "../tags/tag.entity";
import { TagsService } from "../tags/tags.service";

@Controller('tags')
export class TagsController {
    constructor(private tagService: TagsService) { }
    @Get()
    getTags(): Promise<Tag[]> {
        return this.tagService.getTags();
    }

    @Get(':id')
    getTag(@Param() params): any {
        return this.tagService.getTag(params.id);

    }

    @Put()
    updateTag(@Body() tag:Tag) {
        return this.tagService.updateTag(tag);
    }

    @Post()
    inserTag(@Body() tag):Promise<Tag> {
        return this.tagService.insertTag(tag);
    }

    @Delete(':id')
    deleteTag(@Param() params): any {
        return this.tagService.deleteTag(params.id);
    }
}
