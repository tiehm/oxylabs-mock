import * as express from 'express'
import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';

export function UpdateSubUser(req: express.Request, res: express.Response) {

    const data = JSON.parse(readFileSync(path.join(__dirname, '../', '../', '../', 'data/', 'data.json'), 'utf-8'))

    const user= data.find(v => v.id == req.params['userID'])
    const index = data.findIndex(v => v.id == req.params['userID'])
    if (!user) {
        res.status(400).end()
        return
    }
    if (req.body.traffic_limit !== undefined) {
        user.traffic_limit = req.body.traffic_limit
    }
    if (req.body.auto_disable !== undefined) {
        user.auto_disable = req.body.auto_disable
    }
    if (req.body.lifetime !== undefined) {
        user.lifetime = req.body.lifetime
    }
    if (req.body.status !== undefined) {
        user.status = req.body.status
    }
    data[index] = user

    writeFileSync(path.join(__dirname, '../', '../', '../', 'data/', 'data.json'), JSON.stringify(data))

    res.status(200).end()

}
