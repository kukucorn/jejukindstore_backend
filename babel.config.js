console.log('LOADING CONFIG!!!');

module.exports = {
	presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					apis: './src/api-routes',
					configs: './src/config',
					loaders: './src/loaders',
					models: './src/models',
					services: './src/services',
				},
			},
		],
	],
	include: ['./src'],
};
