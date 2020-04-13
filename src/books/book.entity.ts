import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    ID: number

    @Column({ nullable: false, length: 45 })
    name: string

    @Column({ nullable: false, length: 45 })
    description: string

    @Column({ nullable: false })
    Author_ID: number

    @Column({ nullable: false })
    imageSrc: string
}
