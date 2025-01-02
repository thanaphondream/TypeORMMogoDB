import express, {Request, Response} from "express"
import cors from 'cors'
import { myDataSource } from "./mogodb_creact/entity"
import { ObjectId } from "mongodb";
import  app  from './Router/Routet'
import bcrypt from 'bcryptjs';
import { Save_users, myDataSource_getRepository, Delete_users } from "./_connext_OOP/Connext_";

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
            const users = await myDataSource_getRepository().find()
            res.json(users)
        }catch(err){
            console.log("error type", err)
            res.status(500).json({error: "errorr status 500"})
        }
    })

    index.post('/users', async (req: Request, res: Response) =>{
        try{
            const users = await myDataSource_getRepository()
            const cheke_email = await users.findOne({ where: {email: String( req.body.email)}})
            if(cheke_email){
                res.status(401).json({Error: "มีอีเมลซ้ำกันครับ"})
            }else{
                const hahsPassword = await bcrypt.hash(req.body.password, 10)
                req.body.password = hahsPassword
                const user_save = await Save_users(req.body, users)
                res.json({status: "200", user_save})
            }
        }catch(err){
            console.log("error type", err)
            res.status(500).json({error: "errorr status 500"})
        }
    })


    index.delete('/users/:id', async (req: Request, res: Response)=>{
        try{
            const users = await myDataSource_getRepository()
            const user_delete = await Delete_users(req.params.id, users)
            res.json({status : '200', data: 'Delete data goodle', user_delete})
        }catch(err){
            console.log("error type", err)
            res.status(500).json({error: "errorr status 500"})
        }
    })

    index.get('/usersget/:id', async (req: Request, res: Response)=>{
        try{
            const userId = req.params.id;
            console.log("Received ID:", userId);
    
            if (!ObjectId.isValid(userId)) {
                 res.status(400).json({ error: "Invalid ID format" });
            }
    
            const userRepository = await myDataSource_getRepository()
            const user = await userRepository.findOne({
                where: { _id: new ObjectId(userId) } 
            });
    
            if (!user) {
                res.status(404).json({ error: "User not found" });
            }
    
            res.json({ message: "User retrieved successfully", user });
        }catch(err){
            console.log("error type", err)
            res.status(500).json({error: "errorr status 500"})
        }
    })
    
    index.use('/user', app)
    
index.listen(3000, () => console.log("Run ServeGr Is 3000")) 