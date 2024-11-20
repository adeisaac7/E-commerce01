import express from 'express'
import {addArtisan, listArtisan, removeArtisan,singleArtisan, listArtisansByLocation} from '../controllers/artisanController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';


const artisanRouter = express.Router();

artisanRouter.post('/add',adminAuth,upload.single('profilePic'), addArtisan);
artisanRouter.post('/remove',adminAuth,removeArtisan);
artisanRouter.get('/single/:id',singleArtisan);
artisanRouter.get('/list',listArtisan);
artisanRouter.get('/location/:location', listArtisansByLocation);

export default artisanRouter;
