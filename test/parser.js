import 'babel-polyfill';
import { assert } from 'chai';

import Parser from '../src/libs/parser';

describe('Parser', () => {
  describe('Regex', () => {
    const parser = new Parser();

    it('should return an empty array with invalid data (without at)', () => {
      assert.lengthOf(parser.parse('1 book 15.59'), 0);
    });

    it('should return an empty array with invalid data (without quantity)', () => {
      assert.lengthOf(parser.parse('book at 15.59'), 0);
    });

    it('should return an empty array with invalid data (without price)', () => {
      assert.lengthOf(parser.parse('1 book at '), 0);
    });

    it('should return an empty array with invalid data (without name)', () => {
      assert.lengthOf(parser.parse('1 at 15.59'), 0);
    });

    it('should parse correctly a well formatted string', () => {
      const results = parser.parse('123 chocolate bar at 15.59');
      assert.lengthOf(results, 1);
      assert.equal(results[0].price, 15.59);
      assert.equal(results[0].name, 'chocolate bar');
      assert.equal(results[0].quantity, 123);
      assert.equal(results[0].imported, false);
    });

    it('should parse correctly a well formatted string with imported in the middle', () => {
      const results = parser.parse('12 box of imported chocolate bars at 113.90');
      assert.lengthOf(results, 1);
      assert.equal(results[0].price, 113.90);
      assert.equal(results[0].name, 'box of chocolate bars');
      assert.equal(results[0].quantity, 12);
      assert.equal(results[0].imported, true);
    });

    it('should parse correctly a well formatted multiline string', () => {
      assert.lengthOf(parser.parse('2 book at 12.49\n1 music CD at 14.99\n10 chocolate bar at 0.85\n'), 3);
    });
  });
});
