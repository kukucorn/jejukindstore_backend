import { Router } from 'express';

import auth from 'controllers/auth';

const router = Router();

router.get('/google', auth.googleLogin());
router.get('/google/callback', auth.googleLoginCallback(), (req, res) => res.json(req.user));
router.get('/logout');

export default router;
