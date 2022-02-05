import { User } from 'models';

async function findOrCreate({ name, type, thirdAppId }) {
	try {
		return await User.findOrCreate({
			where: {
				type,
				thirdAppId,
			},
			defaults: {
				name,
			},
		});
	} catch (error) {
		console.error(error);
	}
}

async function findById(id) {
	try {
		return await User.findOne({
			where: {
				id,
			},
		});
	} catch (error) {
		console.error(error);
	}
}

export default { findOrCreate, findById };
