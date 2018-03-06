import 'babel-polyfill';
import { assert } from 'chai';

import { roundNearestFiveCents } from '../src/libs/utils';

describe('Utils', () => {
  describe('Function roundNearestFiveCents', () => {
    it('should round to nearest five cents: 54.625 => 54.65', () => {
      assert.equal(roundNearestFiveCents(54.625), 54.65);
    });

    it('should round to nearest five cents: 32.1885 => 32.20', () => {
      assert.equal(roundNearestFiveCents(32.1885), 32.20);
    });

    it('should round to nearest five cents: 20.889 => 20.90', () => {
      assert.equal(roundNearestFiveCents(20.889), 20.90);
    });

    it('should round to nearest five cents: 7.875 => 7.90', () => {
      assert.equal(roundNearestFiveCents(7.875), 7.90);
    });

    it('should round to nearest five cents: 0.355 => 0.40', () => {
      assert.equal(roundNearestFiveCents(0.355), 0.40);
    });
  });
});
