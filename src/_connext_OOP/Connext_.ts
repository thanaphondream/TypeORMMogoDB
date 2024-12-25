import { myDataSource } from "../mogodb_creact/entity";
import { User } from "../mogodb_connextsevver/app-data-source";
import { ObjectId } from "mongodb";

export const myDataSource_getRepository = () => {
    return  myDataSource.getRepository(User)
}

export const user_finon_chekeId = async (id: string) => {
    const mysDate = await myDataSource_getRepository()
    return  mysDate.findOne( {where: { _id: new ObjectId(id)}})
}

export const user_finon_chekeEmail = async (email: string, userRepository: any) => {
    return userRepository.findOne({ where: {email: String(email)}})
    
}