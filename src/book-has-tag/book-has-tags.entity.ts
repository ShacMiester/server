import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class BookHasTags {
    @PrimaryColumn()
    book_ID: number

    @Column()
    Tag_ID: number


}
