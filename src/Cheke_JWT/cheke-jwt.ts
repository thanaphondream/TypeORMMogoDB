import { Request, Response, NextFunction } from "express"
import { myDataSource_getRepository, user_finon_chekeEmail } from "../_connext_OOP/Connext_"
import createError from "../Error_status/error-status"
import jwt from "jsonwebtoken"

// interface JwtPayload {
//     email: string;
// }

type Employee =  {
    email: string,
}

export const cheke_connext_token = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const cheke_token: any = req.headers.authorization
        if(!cheke_connext_token){
            return createError( "No Token Error 400", 400)
        }
        const token = cheke_token.split(" ")[1]

        const token_cheken = jwt.verify(token, "DreamNPC")as Employee
        const usersMydateSoure = await myDataSource_getRepository()
        const user_chekeEmail: any = await user_finon_chekeEmail(token_cheken.email, usersMydateSoure)
        user_chekeEmail? req.body.Id = user_chekeEmail._id  : createError( "Error 400", 400)
        console.log("Token Gode", user_chekeEmail)
        next()
    }catch(err){
        console.error("Error Type", err)
        res.status(500).json({ Error: "Error Type 500", err})
    }
}