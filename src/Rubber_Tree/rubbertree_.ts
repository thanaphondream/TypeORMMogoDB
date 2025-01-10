import { MydataSource_Registertree, Registertree_Save, RegisterTree_GetALL, RegisterTree_Delete } from "../_connext_OOP/rubber_tree_oop"
import { Request, Response, NextFunction } from "express"

export class Registertrees {
    private TreeRepository = MydataSource_Registertree()

    async Save(req: Request, res: Response, next: NextFunction) {
        try{
            // if(req.body.treename|| req.body.date || req.body.other){
            //     throw new Error('Invalid input: Request body is required.');
            // }
            const tree_g = await Registertree_Save(req.body, this.TreeRepository)
            res.json(tree_g)
        }catch(err){
            next(err)
        }
    }

    async all(req: Request, res: Response, next: NextFunction) {
        try{
            const tree_a = await RegisterTree_GetALL(this.TreeRepository)
            res.json(tree_a)
        }catch(err){
            next(err)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction){
        try{
            const delete_tree = await RegisterTree_Delete(req.params.id, this.TreeRepository)
            res.json({ Delete: "Delete Ok Id"})
        }catch(err){
            console.log(err)
            next(err)
        }
    }

}