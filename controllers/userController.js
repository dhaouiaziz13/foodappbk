const userService = require("../services/userService");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  cin: Joi.number().required(),
  itemcode: Joi.array().required(),
  restaurant_name: Joi.string().required(),
});

exports.createorder = async (req, res) => {
  try {
    const { name, last_name, cin, itemcode, restaurant_name } = req.body;
    const isval = schema.validate({
      name,
      last_name,
      cin,
      itemcode,
      restaurant_name,
    });
    if (isval.error) return res.send(isval.error.details[0].message);

    const resp = await userService.createcommand({
      name,
      last_name,
      cin,
      itemcode,
      restaurant_name,
    });
    res.json(resp);
  } catch (error) {
    res.send(error);
  }
};
