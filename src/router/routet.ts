import express from 'express'
import { users_Update } from '../_connext_api/Users'
const app = express.Router()
app.put('/users/:id', users_Update)

export default app