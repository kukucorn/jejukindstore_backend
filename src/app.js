import express from 'express';

import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';

import { registerAPIRouters, registerErrorHandler } from 'apis';

import { port } from 'configs/server';
import corsOptions from 'configs/cors-options';

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(compression());

registerAPIRouters(app);
registerErrorHandler(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
