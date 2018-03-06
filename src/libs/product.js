import conf from '../conf';

class Product {
  constructor(name, price, imported) {
    if (
      typeof name !== 'string' ||
      typeof price !== 'number' ||
      typeof imported !== 'boolean'
    ) {
      throw new Error('wrong params');
    }
    this.name = name;
    this.price = price;
    this.imported = imported;
    this.key = `${name}_${imported}_${price}`.replace(/\s+/g, '_');
  }

  fullName() {
    const prefix = this.imported ? `${conf.import.keyword} ` : '';
    return `${prefix}${this.name}`;
  }
}

export default Product;
