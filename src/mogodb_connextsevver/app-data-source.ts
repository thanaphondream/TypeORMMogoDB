import { Entity, ObjectId, ObjectIdColumn, Column, OneToMany  } from "typeorm"
import { Product } from "./app-data-maintod"

@Entity()
export class User {
    @ObjectIdColumn()
    _id?: ObjectId

    @Column()
    username?: string

    @Column()
    email?: string

    @Column()
    password?: string

    @OneToMany(() => Product, (product) => product.owner)
    products?: Product[]; 
}