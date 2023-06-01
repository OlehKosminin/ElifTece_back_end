const { Products } = require("../models/products");
const { ctrlWrapper } = require("../utils");

const getProduct = async (req, res) => {
  const { shop } = req.params;
  const result = await Products.find({ shop });
  res.json(result);
};

const getProductById = async (req, res) => {
  const searchIds = req.body.map((obj) => obj._id);
  const result = await Products.find({ _id: { $in: searchIds } });
  res.json(result);
};

module.exports = {
  getProduct: ctrlWrapper(getProduct),
  getProductById: ctrlWrapper(getProductById),
};
