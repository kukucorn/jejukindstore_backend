import { UserDao } from 'daos';

async function findOrCreate({ name, type, thirdAppId }) {
	return await UserDao.findOrCreate({ name, type, thirdAppId });
}

async function findById(id) {
	return await UserDao.findById(id);
}

export default { findOrCreate, findById };
