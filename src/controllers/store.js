import { StoreService } from 'services';

async function list(req, res, next) {
	const storeList = await StoreService.findAll();

	res.json(storeList.map((store) => store));
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
