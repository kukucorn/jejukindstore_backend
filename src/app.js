import express from 'express';

import { StoreRouter } from 'apis';

import { port } from 'configs/server';

const app = express();

app.use('/store', StoreRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
