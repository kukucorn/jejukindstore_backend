import { Router } from 'express';

import { StoreService } from 'services';

const router = Router();

router.get('/', async (req, res, next) => {
	const storeList = await StoreService.findAll();

	res.json(storeList.map((store) => store));
});

router.get('/:storeId', async (req, res, next) => {
	const { storeId } = req.params;

	const store = await StoreService.findById(storeId);

	res.json(store);
});

export default router;
