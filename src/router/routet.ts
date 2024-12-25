import express from 'express'
import { users_Update, users_Loing, get_token_01} from '../_connext_api/Users'
const app = express.Router()

app.put('/users/:id', users_Update)
app.post('/Loing', users_Loing)
app.get('/token', get_token_01)

export default app