import conf from '../conf';
import { roundNearestFiveCents } from './utils';

class Taxes {
  constructor() {
    this.importTax = conf.taxes.import;
    this.saleTax = conf.taxes.sale;
  }

  calc(price, exempted = false, imported = false) {
    let tax = exempted ? 0 : this.saleTax;
    tax += imported ? this.importTax : 0;
    return roundNearestFiveCents(price * (tax / 100.0));
  }
}

export default Taxes;
