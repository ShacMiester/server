import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    Name: string

    @Column()
    Color: string

}
