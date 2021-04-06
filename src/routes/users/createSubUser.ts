import { Request, Response } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';

export function CreateSubUser(req: Request, res: Response) {
    const data = JSON.parse(readFileSync(path.join(__dirname, '../', '../', '../', 'data/', 'data.json'), 'utf-8'))

    if (data.find(v => v.username === req.body.username)) {
        res.status(400).end()
        return
    }

    req.body.id = data.length + 1
    data.push(req.body)
    writeFileSync(path.join(__dirname, '../', '../', '../', 'data/', 'data.json'), JSON.stringify(data))

    res.status(201).end()
}
