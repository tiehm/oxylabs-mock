import { Request, Response } from 'express';

export function Login(req: Request, res: Response) {

    const authHeader = req.header("Authorization").split(" ")[1]

    const [user, password] = Buffer.from(authHeader, 'base64').toString().split(':')

    const oxyUsername = process.env.OXY_USERNAME
    const oxyPassword = process.env.OXY_PASSWORD

    // If the given email or password do not match with the environment, we'll refuse
    // to log them in
    if (user !== oxyUsername || password !== oxyPassword) {
        res.status(403).end()
        return
    }

    res.json({
        user_id: process.env.USER_ID,
        token: process.env.TOKEN
    })

}
