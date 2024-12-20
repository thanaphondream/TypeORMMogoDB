import { DataSource } from "typeorm"
import { User } from "../mogodb_connextsevver/app-data-source"
import dotenv from 'dotenv'
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
    entities: [User],
})