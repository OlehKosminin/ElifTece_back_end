const { Products } = require("../models/products");
const { ctrlWrapper } = require("../utils");

const getProduct = async (req, res) => {
  const { shop } = req.params;

  const result = await Products.find({ shop });
  console.log("result: ", result);
  res.json(result);
};

const getProductById = async (req, res) => {
  console.log("req: ", req.body);
  const searchIds = req.body.map((obj) => obj._id);
  console.log("searchIds: ", searchIds);

  const result = await Products.find({ _id: { $in: searchIds } });
  console.log("result: ", result);
  res.json(result);
};

module.exports = {
  getProduct: ctrlWrapper(getProduct),
  getProductById: ctrlWrapper(getProductById),
};
