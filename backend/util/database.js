const Sequelize = require('sequelize');
const sequelize = new Sequelize('adminData', 'root', 'Kolhapur@64', {
  dialect: 'mysql',
  host: 'localhost',
  
});
module.exports=sequelize
     