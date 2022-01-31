import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { StoreRouter } from 'apis';

import { port } from 'configs/server';
import corsOptions from 'configs/cors-options';

const app = express();

app.use(cors(corsOptions));
app.use(morgan('dev')); // dev format is " :method :url :status :response-time ms - :res[content-length] "

app.use('/api/stores', StoreRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
