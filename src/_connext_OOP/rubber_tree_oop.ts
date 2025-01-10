import { RegisterTree } from "../mogodb_connextsevver/app-data-register-tree"
import { myDataSource } from "../mogodb_creact/entity"

export const MydataSource_Registertree = () => {
    return myDataSource.getRepository(RegisterTree)
}

export const Registertree_Save = (body?: string, treemydatasourcte?: any) => {
    return treemydatasourcte.save(body)
}


export const RegisterTree_GetALL = (treemydatasourcte?: any) => {
    return treemydatasourcte.find()
}

export const RegisterTree_Delete = (Id?: string, treemydatasourcte?: any) => {
    return treemydatasourcte.delete(Id)
}