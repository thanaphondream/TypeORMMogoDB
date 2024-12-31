import { Entity, ObjectId, ObjectIdColumn, Column, ManyToOne } from "typeorm";
import { User } from "./app-data-source";

@Entity()
export class Product {
    @ObjectIdColumn()
    _id?: ObjectId;

    @Column()
    name?: string;

    @Column()
    price?: number;

    @Column()
    description?: string;

    @ManyToOne(() => User, (user) => user.products)
    owner?: User; // เชื่อมกับ User
}
