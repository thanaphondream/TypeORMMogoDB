import express from 'express'
import { users_Update, users_Loing, get_me, get_fin} from '../_connext_api/Users'
import { cheke_connext_token } from '../Cheke_JWT/cheke-jwt'
import { Usercontroller } from '../_connext_api/Usercontroller'
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../Swagger_.ts/swagger'; 

const app = express.Router()
const userController = new Usercontroller();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
app.put('/users/:id', users_Update)

// routes/users.js

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/

app.post('/Loing', users_Loing)
app.get('/token', cheke_connext_token, get_me)

app.get("/all", (req, res, next) => userController.all(req, res, next));

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 */

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app