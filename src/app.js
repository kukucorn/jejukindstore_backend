import express from 'express';
import morgan from 'morgan';

import { StoreRouter } from 'apis';

import { port } from 'configs/server';

const app = express();

app.use(morgan('dev')); // dev format is " :method :url :status :response-time ms - :res[content-length] "

app.use('/api/stores', StoreRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
