import 'babel-polyfill';
import { assert } from 'chai';

import Product from '../src/libs/product';

describe('Product', () => {
  describe('Create new', () => {
    it('should throw an error if price is not a number', () => {
      const fn = () => { const _ = new Product('book', '15.34', true); };
      assert.throw(fn, Error);
    });

    it('should throw an error if name is not a string', () => {
      const fn = () => { const _ = new Product(12345, 15.34, true); };
      assert.throw(fn, Error);
    });

    it('should throw an error if imported is not a boolean', () => {
      const fn = () => { const _ = new Product('book', 15.34, 'true'); };
      assert.throw(fn, Error);
    });

    it('should generate fullName correctly with imported true', () => {
      const product = new Product('book', 15.34, true);
      assert.equal(product.fullName(), 'imported book');
    });

    it('should generate fullName correctly with imported false', () => {
      const product = new Product('book', 15.34, false);
      assert.equal(product.fullName(), 'book');
    });
  });
});
