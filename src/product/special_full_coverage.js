const FullCoverage = require('./full_coverage');

class SpecialFullCoverage extends FullCoverage {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    super.updatePrice();
  }

  getName() {
    return "Special Full Coverage";
  }

  setPrice(){
    var price = 0;
    if (this.sellIn <= 0){
      this.price = 0;
    } else if (this.sellIn > 10){
      super.setPrice();
    } else if (this.sellIn < 10 && this.sellIn > 5){
      price = this.price + 2;
      this.getRealPrice(price);
    } else {
      price = this.price + 3;
      this.getRealPrice(price);
    }
  }

  getRealPrice(price) {
    super.getRealPrice(price);
  }
}

module.exports = SpecialFullCoverage;
