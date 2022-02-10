import { Router } from 'express';

import { AuthController, UserController } from 'controllers';

const router = Router();

router.get('', AuthController.validateUser, UserController.item);

export default router;
