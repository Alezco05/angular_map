import {Router} from 'express';
const router = Router();

import {getUser} from '../controllers/user.controller';

router.route('/user').get(getUser);

export default router;