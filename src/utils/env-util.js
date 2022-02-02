export function isDeploymentEnv() {
	return process.env.NODE_ENV === 'deployment';
}

export function isDevelopmentEnv() {
	return process.env.NODE_ENV === 'development';
}
