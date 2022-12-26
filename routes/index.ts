import {Request, Response} from 'express';
import { makeRequest } from '../utils/helper';
/*
 * GET home page.
 */
export async function index(req: Request, res: Response){

    const response = await makeRequest({url: "http://worldclockapi.com/api/json/utc/now"});
    const {currentDateTime} = response.data;
    res.render('index', { title: `Express ${currentDateTime}` });
};
