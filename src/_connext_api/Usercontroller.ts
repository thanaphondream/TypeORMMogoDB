import { myDataSource } from "../mogodb_creact/entity";
import { User } from "../mogodb_connextsevver/app-data-source";
import { ObjectId } from "mongodb";
import { Request, Response, NextFunction } from "express";


export class Usercontroller {
    private userRepository = myDataSource.getRepository(User);

    async all(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userRepository.find();
            console.log("Hello world")
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
}