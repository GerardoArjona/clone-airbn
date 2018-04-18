import express from 'express';
import {testApi} from '../controllers';
import {createUser} from '../controllers/users'


const router = express.Router();



router.get('/test',testApi);

router.post('/users',createUser);

router.put('/users/profile');

export default router;