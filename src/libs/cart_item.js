class CartItem {
  constructor(product, quantity, tax, exempted) {
    this.product = product;
    this.quantity = quantity;
    this.tax = tax;
    this.exempted = exempted;
  }

  shelfPrice() {
    return (this.product.price + this.tax) * this.quantity;
  }
}

export default CartItem;
