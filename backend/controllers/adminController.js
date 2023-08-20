const Product = require("../model/productData");

exports.addProduct = async (req, res, next) => {
  try {
    sellingPrice = req.body.sellingPrice;
    productName = req.body.productName;
    category = req.body.category;
    console.log({ sellingPrice, productName, category });

    const data = await Product.create({ sellingPrice, productName, category });
    res.status(201).json({ newDetails: data });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.getProduct = async (req, res) => {
    await Product.findAll().then((product) => {
      res.status(201).json(product);
    });
  };

  exports.deleteProduct = (req, res, next) => {
    Product.findByPk(req.params.id).then((product) => {
      product.destroy();
      res.send("delete success");
    });
  };