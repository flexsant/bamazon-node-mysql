var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
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
// Variables to store results from prompts
var item;
var quantity;
var updatedStock;
var stockQuantity;
var itemPrice;
var totalPrice;

connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  inventoryDisplay();
});

function inventoryDisplay() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    var table = new Table({

      head: ["Product ID", "Product Name", "Department Name", "Price", "Stock Quantity"]
      , colWidths: [15, 30, 20, 10, 20]
    });

    for (var i = 0; i < res.length; i++) {
      table.push(

        [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
      );
    }

    console.log(table.toString());

    start();
  });

  function start() {
    inquirer
      .prompt([
        {
          name: "id",
          type: "number",
          message: "What is the ID of the product you would like to buy?",
        },
        {
          name: "quantity",
          type: "number",
          message: "How many units of the product would you like to buy?",
        }

      ]).then(function (answer) {
        item = answer.id;
        quantity = answer.quantity;
        console.log("You would like to purchase " + quantity + " of item number " + item);
        inventory();
      })
  };

  function inventory() {
    connection.query(`SELECT * FROM products WHERE ?`, { id: item },
      function (err, res) {
        console.log(res);
        stockQuantity = res[0].stock_quantity;
        itemPrice = res[0].price;
        if (res.length > 0) {
          if (stockQuantity < quantity) {
            // Logs a phrase like Insufficient quantity!, and then prevent the order from going through.
            console.log("Not enough quantity");
            inventoryDisplay();
          }
        }
      }
    )
  }

// func() that logs a phrase like Insufficient quantity!, and then prevent the order from going through.

// fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.

// Once the update goes through, show the customer the total cost of their purchase.