import { Request, Response, NextFunction } from "express";
import { myDataSource_getRepository, user_finon_chekeId, user_finon_chekeEmail, Save_users } from "../_connext_OOP/Connext_";
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';

export async function users_Update(req: Request, res: Response, next: NextFunction) {
    try{
        const userRepository = await myDataSource_getRepository()
        const users_cheke: any = await user_finon_chekeId(req.params.id)
        if(!users_cheke) res.status(401).json({Erorr: "Error status 401"})
            userRepository.merge(users_cheke, req.body)
            const hahsPassword = await bcrypt.hash(req.body.password, 10)
            users_cheke.password =  hahsPassword
            const users_save = await Save_users(users_cheke, userRepository)
            res.json({ Api: "Google Update Api ", users_save})
    }catch(err){
        console.error("Error status 500", err)
        res.status(500).send({Error: "Status Api 500 ", err})
    }
}


export const users_Loing = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const userRepository = await myDataSource_getRepository()
        const cheke_email: any = await user_finon_chekeEmail(req.body.email, userRepository)
        console.log(cheke_email)
        const isPasswordValid = await bcrypt.compare(req.body.password, cheke_email?.password);
        switch(isPasswordValid){
            case !isPasswordValid:
                res.status(401).json({ Error : "Error Type 401", cheke_email})
            default:
              const token = jwt.sign(
                {Id: cheke_email._id, email: cheke_email.email, username: cheke_email.username},
                "DreamNPC",
                { expiresIn: '3d'}
                )
                req.body.token_01 = token
                // console.log('token', token , {Id: cheke_email._id, email: cheke_email.email, username: cheke_email.username})
              res.json({status: "200", token, chekecode: cheke_email})
        }
    }catch(err){
        console.error({ Error: "Type Error ", err})
        res.status(500).json({Error: "Type Error", err})
    }
}

export const get_me = (req: Request, res: Response) =>{
    const token: string = req.body.Id
    res.json({Token: 'Token True', token})
}



