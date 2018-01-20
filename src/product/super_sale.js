const Product = require('./product');

class SuperSale extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    super.updatePrice();
  }

  getName() {
    return "Super Sale";
  }

  setPrice() {
    var price = 0;
    if (this.sellIn >= 0) {
      price = this.price - 2;
    } else if (this.sellIn < 0) {
      price = this.price - 4;
    } else {
      price = this.price;
    }
    this.getRealPrice(price);
  }

  getRealPrice(price) {
    super.getRealPrice(price);
  }
}

module.exports = SuperSale;
