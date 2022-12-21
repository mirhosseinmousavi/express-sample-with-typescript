import {Request, Response} from 'express';

/*
 * GET home page.
 */
export function index(req: Request, res: Response){
    res.render('index', { title: 'Express' });
};
