import express from 'express';

import { StoreRouter } from 'apis';

const app = express();
const port = 3000;

app.use('/store', StoreRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
