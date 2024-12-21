import { Request, Response, NextFunction } from "express";
import { myDataSource } from "../mogodb_creact/entity";
import { User } from "../mogodb_connextsevver/app-data-source";
import { ObjectId } from "typeorm"; 

export async function users_Update(req: Request, res: Response, next: NextFunction) {
    try{
        const users = await myDataSource.getRepository(User)
        const users_cheke: any = await users.findOne({ where: { _id: new ObjectId(req.params.id)}})
        if(!users_cheke) res.status(401).json({Erorr: "Error status 401"})
        users.merge(users_cheke, req.body)
        const users_save = await users.save(users_cheke)
        res.json({ Api: "Google Update Api ", users_save})
    }catch(err){
        console.error("Error status 500", err)
        res.status(500).send({Error: "Status Api 500 ", err})
    }
}