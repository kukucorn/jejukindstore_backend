import { StoreService } from 'services';

async function list(req, res, next) {
	const { search, tag } = req.query;

	if (search) {
		const searchedStoreList = await StoreService.search(search);

		res.json(searchedStoreList);
	} else if (tag) {
	} else {
		const storeList = await StoreService.findAll();

		res.json(storeList);
	}
}

async function item(req, res, next) {
	const { storeId } = req.params;

	const store = await StoreService.findById(storeId);

	res.json(store);
}

export default {
	list,
	item,
};
