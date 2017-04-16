/**
 * Created by avloss on 09/04/2017.
 */

import express from 'express';
import render from './render';

export const instructorFormRouter = express.Router();
export const INSTRUCTOR_FORM_ROUTE_PREFIX = "/if"

instructorFormRouter.get('/test', (req,res)=>res.send("placeholder for the blog!"));
instructorFormRouter.get('/', render);