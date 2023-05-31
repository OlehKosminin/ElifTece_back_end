const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../utils");

const historySchema = new Schema(
  {
    address: {
      type: String,
      required: [true, "The address title must be filled"],
    },
    name: { type: String, required: [true, "The name price must be filled"] },
    email: {
      type: String,
      required: true,
    },
    phone: { type: String, required: [true, "The name phone must be filled"] },
    ordering: {
      type: Array,
      required: [true, "The name phone must be filled"],
    },
  },
  { versionKey: false }
);

historySchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  address: Joi.string().required().messages({
    "any.required": "missing required address field",
    "string.empry": "address cannot be empry",
  }),
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
    "string.empry": "name cannot be empry",
  }),
  phone: Joi.string().required().messages({
    "any.required": "missing required phone field",
    "string.empry": "phone cannot be empry",
  }),
  email: Joi.string().required().messages({
    "any.required": "missing required phone field",
    "string.empry": "phone cannot be empry",
  }),
  ordering: Joi.array().required().messages({
    "any.required": "take your orders",
  }),
});

const schemas = {
  addSchema,
};

const History = model("history", historySchema);
module.exports = {
  History,
  schemas,
};
