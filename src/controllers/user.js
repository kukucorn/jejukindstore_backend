async function item(req, res, next) {
	res.json(req.user);
}

export default {
	item,
};
