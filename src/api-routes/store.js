import { Router } from 'express';

import store from 'controllers/store';

const router = Router();

router.get('/', store.list);
router.get('/:storeId', store.item);

export default router;
