import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Auth } from './middleware/auth';
import { Login } from './routes/login';
import { CreateSubUser } from './routes/users/createSubUser';
import { GetAllSubUsers } from './routes/users/getAllSubUsers';
import { UpdateSubUser } from './routes/users/updateSubUser';

require('dotenv').config()

const app = express()

app.use(bodyParser.json());

app.post("/v1/login", Login)

// Only check against Auth middleware on endpoints which need authentication
app.use(Auth)

app.get(`/v1/users/${process.env.USER_ID}/sub-users`, GetAllSubUsers)
app.post(`/v1/users/${process.env.USER_ID}/sub-users`, CreateSubUser)
app.patch(`/v1/users/${process.env.USER_ID}/sub-users/:userID`, UpdateSubUser)


app.listen(process.env.PORT, () => {
    console.log("Listening to Port " + process.env.PORT)
})
