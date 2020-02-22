import * as express from 'express';
import { Request, Response } from 'express';

const UserRouter:any = express.Router();

UserRouter.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'user api'
    });
});

module.exports = UserRouter;