import {Request, Response} from 'express';

export function secondPage(req: Request, res: Response){

    req.flash('message', 'This is a message from the "/" endpoint');
    res.redirect('/');
}