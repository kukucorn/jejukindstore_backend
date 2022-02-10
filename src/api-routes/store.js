import { Router } from 'express';

import { StoreController } from 'controllers';

const router = Router();

router.get('/', StoreController.list);
router.get('/:storeId', StoreController.item);

export default router;
