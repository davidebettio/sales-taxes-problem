import fs from 'fs';
import path from 'path';

import Parser from './libs/parser';
import Cart from './libs/cart';
import Product from './libs/product';

const parser = new Parser();
const cart = new Cart();

const inputsFolder = path.resolve(`${__dirname}/../inputs`);
fs.readdirSync(inputsFolder).forEach((file) => {
  const data = fs.readFileSync(path.join(inputsFolder, file), 'ascii');
  const results = parser.parse(data);

  cart.name = file;
  results.forEach((result) => {
    const {
      name, price, imported, quantity,
    } = result;
    const product = new Product(name, price, imported);
    cart.addProduct(product, quantity);
  });
  console.log(cart.getReceipt());
  cart.empty();
});

