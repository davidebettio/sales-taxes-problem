import 'babel-polyfill';
import { assert } from 'chai';

import Exemptions from '../src/libs/exemptions';

describe('Exemptions', () => {
  describe('Function verify', () => {
    const exemptions = new Exemptions();

    it('should return true with name: \'book\'', () => {
      assert.equal(exemptions.verify('book'), true);
    });

    it('should return true with name: \'headache pills\'', () => {
      assert.equal(exemptions.verify('headache pills'), true);
    });

    it('should return true with name: \'chocolate\'', () => {
      assert.equal(exemptions.verify('chocolate'), true);
    });

    it('should return false with name: \'newspaper\'', () => {
      assert.equal(exemptions.verify('newspaper'), false);
    });

    it('should return false with name: \'chewing gum\'', () => {
      assert.equal(exemptions.verify('chewing gum'), false);
    });

    it('should return false with name: \'iPad\'', () => {
      assert.equal(exemptions.verify('iPad'), false);
    });
  });
});
