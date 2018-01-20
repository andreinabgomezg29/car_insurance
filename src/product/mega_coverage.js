const Product = require('./product');

class MegaCoverage extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    this.price = this.price;
    this.sellIn = this.sellIn;
  }

  getName() {
    return "Mega Coverage";
  }

  setPrice(){
    this.price = this.price;
  }

  getRealPrice(price) {
    super.getRealPrice(price);
  }
}

module.exports = MegaCoverage;
