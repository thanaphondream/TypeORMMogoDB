import { DataSource } from "typeorm"
import { User } from "../mogodb_connextsevver/app-data-source"
import dotenv from 'dotenv'
import { Product } from "../mogodb_connextsevver/app-data-maintod"
import { RegisterTree } from "../mogodb_connextsevver/app-data-register-tree"
dotenv.config()

export const myDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "test",
    url: process.env.MOGODBLINE,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    logging: true,
    entities: [User, Product, RegisterTree],
})