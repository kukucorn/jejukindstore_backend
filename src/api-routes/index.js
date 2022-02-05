import StoreRouter from './store';
import AuthRouter from './auth';

import { isDeploymentEnv } from 'utils/env-util';

export function registerAPIRouters(app) {
	app.use('/api/stores', StoreRouter);
	app.use('/api/auth', AuthRouter);
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
