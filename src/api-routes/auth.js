import { Router } from 'express';

import { AuthController } from 'controllers';

const router = Router();

router.get('/google', AuthController.googleLogin());
router.get('/google/callback', AuthController.googleLoginCallback(), (req, res) => res.redirect('/'));
router.get('/logout');

export default router;
