import StoreRouter from './store';

import { isDeploymentEnv } from 'utils/env-util';

export function registerAPIRouters(app) {
	app.use('/api/stores', StoreRouter);
}

export function registerErrorHandler(app) {
	app.use(function (req, res, next) {
		const err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	if (isDeploymentEnv()) {
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
}
