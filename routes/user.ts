import {Request, Response} from 'express';

/*
 * GET users listing.
 */

export function list(req: Request, res: Response){
    res.send("respond with a resource");
};

/*
 * GET users copy.
 */

export function copy(req: Request, res: Response){
    res.json({success: true});
};