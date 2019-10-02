var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  inventoryDisplay();
});

function inventoryDisplay() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i ++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      }
      start();
    })

}
function start() {
  inquirer
    .prompt([
      {
        name: "product",
        type: "number",
        message: "What is the ID of the product you would like to buy?",
      },
      {
        name: "quantity",
        type: "number",
        message: "How many units of the product would you like to buy?",
      }
    ]).then(function(answer) {


    })
  }
