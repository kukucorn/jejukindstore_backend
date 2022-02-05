import express from 'express';

import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';

import { registerAPIRouters, registerErrorHandler } from 'apis';

import { PORT, SECRET_KEY } from 'configs/server';
import corsOptions from 'configs/cors-options';

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(compression());
app.use(
	session({
		secret: SECRET_KEY,
		resave: true,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());

registerAPIRouters(app);
registerErrorHandler(app);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
