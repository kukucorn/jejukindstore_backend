console.log('LOADING CONFIG!!!');

module.exports = {
	presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					apis: './src/api-routes',
					configs: './src/configs',
					daos: './src/daos',
					loaders: './src/loaders',
					models: './src/models',
					public_data: './src/public_data',
					services: './src/services',
				},
			},
		],
	],
	include: ['./src'],
};
