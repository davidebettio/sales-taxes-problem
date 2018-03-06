import CartItem from './cart_item';
import Taxes from './taxes';
import Exemptions from './exemptions';

class Cart {
  constructor() {
    this.name = '';
    this.items = {};
    this.taxes = new Taxes();
    this.exemptions = new Exemptions();
  }

  addProduct(product, quantity = 1) {
    if (product.key in this.items) {
      this.items[product.key].quantity += quantity;
    } else {
      const exempted = this.exemptions.verify(product.name);
      const tax = this.taxes.calc(product.price, exempted, product.imported);
      this.items[product.key] = new CartItem(product, quantity, tax, exempted);
    }
  }

  empty() {
    this.name = '';
    this.items = {};
  }

  count() {
    return Object.keys(this.items).length;
  }

  calcSalesTaxes() {
    return Object.values(this.items).reduce((sum, item) => sum + (item.tax * item.quantity), 0);
  }

  calcTotal() {
    return Object.values(this.items).reduce((sum, item) => sum + item.shelfPrice(), 0);
  }

  getReceipt() {
    const header = `${this.name}\n`;
    const footer = '\n';

    let body = Object.values(this.items).map(item =>
      `${item.quantity} ${item.product.fullName()}: ${item.shelfPrice().toFixed(2)}`,
    ).join('\n');
    body += `\nSales Taxes: ${this.calcSalesTaxes().toFixed(2)}`;
    body += `\nTotal: ${this.calcTotal().toFixed(2)}`;

    return `${header}${body}${footer}`;
  }
}

export default Cart;
