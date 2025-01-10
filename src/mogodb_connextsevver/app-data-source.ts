import { Entity, ObjectId, ObjectIdColumn, Column, OneToMany  } from "typeorm"
import { Product } from "./app-data-maintod"
import { RegisterTree } from "./app-data-register-tree"

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

    @OneToMany(() => RegisterTree, (registerTree) => registerTree.registertree)
    registertree?: RegisterTree[]; 
}