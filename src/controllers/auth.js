import { Router } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import oauthConfig from 'configs/oauth';
import { UserService } from 'services';

passport.use(
	new GoogleStrategy(
		{
			clientID: oauthConfig.GOOGLE_CLIENT_ID,
			clientSecret: oauthConfig.GOOGLE_CLIENT_SECRET,
			callbackURL: oauthConfig.GOOGLE_CALLBACK_URL,
		},
		async function (accessToken, refreshToken, profile, cb) {
			try {
				const [user, created] = await UserService.findOrCreate({ name: profile.displayName, type: 'google_auth', thirdAppId: profile.id });
				return cb(null, user);
			} catch (error) {
				return cb(error, null);
			}
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
	try {
		const user = await UserService.findById(id);
		done(null, user);
	} catch (error) {
		done(error, null);
	}
});

function googleLogin() {
	return passport.authenticate('google', { scope: ['profile'] });
}

function googleLoginCallback() {
	return passport.authenticate('google', { failureRedirect: '/login', failureMessage: true });
}

export default { googleLogin, googleLoginCallback };
