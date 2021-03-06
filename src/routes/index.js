import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import cors from 'cors';

import variable from '../controller/variable';
import account from '../controller/account';

let router = express();

// connect to db
initializeDb(db => {

  router.use(cors())
   
   // middleware
   router.use(middleware({config,db}));
   
   // api routes v1
   router.use('/account', account({config,db}));
   router.use('/variable', variable({config,db}));
   
});

export default router;