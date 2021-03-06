DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price INT(50) NULL,
  stock_quantity INT(50) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0001, "Sex Wax", "Surf Accesories", "2.99", 100);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0002, "Sticky-Bumps", "Surf Accesories", "2.99", 100);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0003, "Ball-16oz-Mason-Jar-4pk", "Kitchen_Home", "9.39", 30);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0004, "Heath-Multi-Stem_Vase", "Kitchen-Home", "102.00", 10);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0005, "Cactus-Paddle", "Kitchen-Home", "20.00", 5);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0006, "Trucker-Hat-Blk", "Mens-Clothing", "15.00", 35);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0007, "Organic-Plain-Tee-Blk", "Mens-Clothing", "19.99", 50);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0008, "Organic-Bamboo-Boxers-Blk", "Mens-Clothing", "16.99", 25);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0009, "Organic-Canvas-Bag-Tan", "Kitchen-Home", "9.99", 50);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (0010, "Recycled-Plastic-Bag", "Kitchen-Home", "9.99", 100);


