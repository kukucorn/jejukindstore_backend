import express from 'express';

import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';

import { registerAPIRouters } from 'apis';

import { port } from 'configs/server';
import corsOptions from 'configs/cors-options';

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('dev')); // dev format is " :method :url :status :response-time ms - :res[content-length] "
app.use(compression());

registerAPIRouters(app);

app.use(function (req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

if (process.env.NODE_ENV === 'deployment') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.json({
			message: err.message,
		});
	});
} else {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.json({
			message: err.message,
			error: err,
		});
	});
}

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
