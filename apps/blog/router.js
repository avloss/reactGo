/**
 * Created by avloss on 09/04/2017.
 */

import express from 'express';

export const blogRouter = express.Router();

blogRouter.get('/', (req,res)=>res.send("placeholder for the blog!"));