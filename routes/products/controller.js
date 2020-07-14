const { Products } = require("../../models");
module.exports = {
  updateProducts: async (req, res) => {
    const { id } = req.params;
    const { name_products, type, price } = req.body;
    try {
      const results = await Products.update(
        {
          name_products,
          type,
          price,
        },
        {
          where: {
            idproducts: id,
          },
        }
      );
      res.send({
        message: `Update data succcess`,
        results: results,
      });
    } catch (error) {
      res.send(error);
    }
  },

  deleteProducts: async (req, res) => {
    const { id } = req.params;

    try {
      const results = await Products.destroy({
        where: {
          idproducts: id,
        },
      });
      res.send({
        message: `Delete data succcess`,
        results: results,
      });
    } catch (error) {
      res.send(error);
    }
  },
};
