const { Products } = require("../../models");
module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const results = await Products.findAll();

      res.send({
        results,
      });
    } catch (error) {
      res.send(error);
    }
  },
  getProductName: async (req, res) => {
    const { name_products } = req.body;
    try {
      const result = await Products.findAll({
        where: { name_products: name_products },
      });

      res.send({ result });
    } catch (error) {
      res.send(error);
    }
  },

  getProductType: async (req, res) => {
    const { type } = req.body;
    try {
      const result = await Products.findAll({
        where: { type: type },
      });

      res.send({ result });
    } catch (error) {
      res.send(error);
    }
  },

  addProduct: async (req, res) => {
    const { name_products, type, price } = req.body;

    try {
      const result = await Products.create({
        name_products,
        type,
        price,
      });
      res.send({
        message: `Post data success`,
        result: result,
      });
    } catch (error) {
      res.send(error);
    }
  },
};
