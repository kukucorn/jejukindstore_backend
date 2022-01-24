import express from 'express';

import storeRouter from './api-routes/store.js';

const app = express();
const port = 3000;

app.use('/store', storeRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
