const { History } = require("../models/history");
const { ctrlWrapper } = require("../utils");

const addHistory = async (req, res) => {
  const order = req.body;
  History.create(req.body);

  res.json(order);
};

const getOrder = async (req, res) => {
  const allOrders = await History.find({});
  console.log("allOrders: ", allOrders);
  res.json(allOrders);
};

const getOrderByNumb = async (req, res) => {
  const { phone } = req.params;
  const personalOrders = await History.find({ phone });
  console.log("personalOrders: ", personalOrders);
  res.json(personalOrders);
};

module.exports = {
  addHistory: ctrlWrapper(addHistory),
  getOrder: ctrlWrapper(getOrder),
  getOrderByNumb: ctrlWrapper(getOrderByNumb),
};
