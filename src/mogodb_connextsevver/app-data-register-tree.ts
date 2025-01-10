import { Entity, ObjectId, ObjectIdColumn, Column, ManyToOne } from "typeorm";
import { User } from "./app-data-source";

@Entity()
export class RegisterTree {
    @ObjectIdColumn()
    _id?: ObjectId;

    @Column()
    treename?: string;

    @Column()
    date?: Date;

    @Column()
    other?: string; 

    @ManyToOne(() => User, (user) => user.registertree)
    registertree?: User;
}
