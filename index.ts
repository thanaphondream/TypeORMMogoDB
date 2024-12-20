import express, {Request, Response} from "express"
import cors from 'cors'
import { myDataSource } from "./src/mogodb_creact/entity"
import { User } from "./src/mogodb_connextsevver/app-data-source"
import { ObjectId } from "typeorm"; 


const index = express()


index.use(express.json())
index.use(cors())

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

    index.get('/users', async (req: Request, res: Response) =>{
        try{
            const users = await myDataSource.getRepository(User).find()
            res.json(users)
        }catch(err){
            console.log("error type", err)
            res.status(500).json({error: "errorr status 500"})
        }
    })

    index.post('/users', async (req: Request, res: Response) =>{
        try{
            const users = await myDataSource.getRepository(User)
            const cheke_email = await users.findOne({ where: {email: String( req.body.email)}})
            if(cheke_email){
                res.status(401).json({Error: "มีอีเมลซ้ำกันครับ"})
            }else{
                
                const user_save = await users.save(req.body)
                res.json({status: "200", user_save})
            }
        }catch(err){
            console.log("error type", err)
            res.status(500).json({error: "errorr status 500"})
        }
    })


    index.delete('/users/:id', async (req: Request, res: Response)=>{
        try{
            const users = await myDataSource.getRepository(User)
            const user_delete = await users.delete(req.params.id)
            res.json({status : '200', data: 'Delete data goodle', user_delete})
        }catch(err){
            console.log("error type", err)
            res.status(500).json({error: "errorr status 500"})
        }
    })

    index.get('/usersget/:id', async (req: Request, res: Response)=>{
        try{
            const users = await myDataSource.getRepository(User).findOne({  where: { _id: new ObjectId(req.params.id)}})
        }catch(err){
            console.log("error type", err)
            res.status(500).json({error: "errorr status 500"})
        }
    })
    
index.listen(3000, () => console.log("Run Server Is 3000"))