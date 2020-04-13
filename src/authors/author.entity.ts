import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { isNull } from "util";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    Name: string

    @Column()
    PhoneNumber: string

    @Column()
    Address: string

}
