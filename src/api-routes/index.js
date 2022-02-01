import StoreRouter from './store';

export function registerAPIRouters(app) {
	app.use('/api/stores', StoreRouter);
}
