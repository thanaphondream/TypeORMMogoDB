import express from 'express'
import { users_Update, users_Loing, get_me} from '../_connext_api/Users'
import { cheke_connext_token } from '../Cheke_JWT/cheke-jwt'
const app = express.Router()

app.put('/users/:id', users_Update)
app.post('/Loing', users_Loing)
app.get('/token', cheke_connext_token, get_me)


export default app