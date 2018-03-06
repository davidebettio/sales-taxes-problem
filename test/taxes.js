import 'babel-polyfill';
import { assert } from 'chai';

import Taxes from '../src/libs/taxes';

describe('Taxes', () => {
  describe('Function calc', () => {
    const taxes = new Taxes();

    it('should return 10.00 with price: 100.00, exempted: false, imported: false', () => {
      assert.equal(taxes.calc(100.00), 10.00);
    });

    it('should return 0.00 with price: 100.00, exempted: true, imported: false', () => {
      assert.equal(taxes.calc(100.00, true), 0.00);
    });

    it('should return 15.00 with price: 100.00, exempted: false, imported: true', () => {
      assert.equal(taxes.calc(100.00, false, true), 15.00);
    });

    it('should return 5.00 with price: 100.00, exempted: true, imported: true', () => {
      assert.equal(taxes.calc(100.00, true, true), 5.00);
    });
  });
});
