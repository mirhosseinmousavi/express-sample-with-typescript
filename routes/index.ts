import {Request, Response} from 'express';
import { makeRequest } from '../utils/helper';

/*
 * GET home page.
 */
export async function index(req: Request, res: Response){
    // const baseUrl = process.env.BASE_URL;
    // console.log(`baseUrl: ${baseUrl}`);
    // const response = await makeRequest({url: baseUrl});
    // const {currentDateTime} = response.data;
    res.render('index', { blog: {title: "one"} /*,title: `Express ${currentDateTime}`*/ });
};
