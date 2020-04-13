import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from "../tags/tag.entity";
import { TagsController } from "../tags/tags.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}
