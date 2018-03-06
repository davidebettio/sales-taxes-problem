import 'babel-polyfill';
import { assert } from 'chai';

import Cart from '../src/libs/cart';
import Product from '../src/libs/product';

describe('Cart', () => {
  describe('Insert a product', () => {
    let cart;

    beforeEach(() => {
      cart = new Cart();
      cart.addProduct(new Product('book', 15.34, false), 3);
    });

    it('count should be 1', () => {
      assert.equal(cart.count(), 1);
    });

    it('name should be \'book\'', () => {
      assert.equal(Object.values(cart.items)[0].product.name, 'book');
    });
  });

  describe('Insert the same product more than once', () => {
    let cart;

    beforeEach(() => {
      cart = new Cart();
      cart.addProduct(new Product('book', 15.34, false), 3);
      cart.addProduct(new Product('book', 15.34, false), 2);
    });

    it('count should be 1', () => {
      assert.equal(cart.count(), 1);
    });

    it('quantity should be 5', () => {
      assert.equal(Object.values(cart.items)[0].quantity, 5);
    });
  });

  describe('Insert different products', () => {
    let cart;

    beforeEach(() => {
      cart = new Cart();
      cart.addProduct(new Product('red book', 15.34, false), 3);
      cart.addProduct(new Product('yellow book', 15.34, false), 2);
      cart.addProduct(new Product('yellow book', 15.34, true), 1);
    });

    it('count should be 3', () => {
      assert.equal(cart.count(), 3);
    });
  });

  describe('Functions', () => {
    let cart;

    beforeEach(() => {
      cart = new Cart();
      cart.addProduct(new Product('book', 15.34, false), 2);
      cart.addProduct(new Product('ipad', 357.00, true), 1);
      cart.addProduct(new Product('chocolate bar', 4.59, true), 2);
      cart.addProduct(new Product('box of cigarettes', 3.55, false), 10);
    });

    it('calcSalesTaxes should calculate sales taxes', () => {
      assert.equal(cart.calcSalesTaxes(), 58.05);
    });

    it('calcTotal should calculate total', () => {
      assert.equal(cart.calcTotal(), 490.41);
    });

    it('getReceipt should list all products, sales taxes and total', () => {
      const receipt = cart.getReceipt();
      assert.include(receipt, 'book');
      assert.include(receipt, 'imported chocolate bar');
      assert.include(receipt, 'Sales Taxes');
      assert.include(receipt, 'Total');
    });
  });
});
