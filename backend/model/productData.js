const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  sellingPrice: Sequelize.INTEGER,

  productName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = product;
