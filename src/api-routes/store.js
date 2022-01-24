import { Router } from 'express';

import storeService from '../services/store.js';

const router = Router();

router.get('/', async (req, res, next) => {
	const storeList = await storeService.findAll();
	res.json(storeList.map((store) => store.store_id));
});

export default router;
