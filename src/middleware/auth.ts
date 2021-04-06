import * as express from 'express'

export function Auth(req: express.Request, res: express.Response, next: express.NextFunction) {

    if (req.header("Authorization") !== "Bearer " + process.env.TOKEN) {
        res.status(403).end()
        return
    }

    next()

}
