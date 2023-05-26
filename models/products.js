const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../utils");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The name title must be filled"],
    },
    price: { type: Number, required: [true, "The name price must be filled"] },
    shop: {
      type: String,
      ref: "products",
      required: true,
    },
    _id: {
      type: Schema.Types.ObjectId,
    },
  },
  { versionKey: false }
);

productSchema.post("save", handleMongooseError);

const Products = model("products", productSchema);

module.exports = { Products };
