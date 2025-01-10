import { ObjectId } from "mongodb";
import { Request, Response, NextFunction } from "express";
import { myDataSource_getRepository } from "../_connext_OOP/Connext_";


export class Usercontroller {
    private userRepository = myDataSource_getRepository()

    async all(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userRepository.find()
            console.log("Hello world")
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
}