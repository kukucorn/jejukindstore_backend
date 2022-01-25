import { Router } from 'express';

import { StoreService } from 'services';

const router = Router();

router.get('/', async (req, res, next) => {
	const storeList = await StoreService.findAll();
	res.json(storeList.map((store) => store));
});

export default router;
