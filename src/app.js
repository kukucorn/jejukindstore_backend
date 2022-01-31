import express from 'express';

import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';

import { StoreRouter } from 'apis';

import { port } from 'configs/server';
import corsOptions from 'configs/cors-options';

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors(corsOptions));
app.use(morgan('dev')); // dev format is " :method :url :status :response-time ms - :res[content-length] "

app.use('/api/stores', StoreRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
