import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';

import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') , OrphanagesController.create);


export default routes;

//PADRAO MVC - MODELS, VIEWS, CONTROLLERS - DESENVOLVIMENTO WEB (https://youtu.be/ZW2JLtX4Dag)
//padrao ter os metodos index, show, create, update e delete