export class FullCoverage extends Product {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    super.updatePrice();
  }

  getName() {
    return "Full Coverage";
  }

  setPrice(){
    var price = this.price + 1;
    this.getRealPrice(price);
  }

  getRealPrice(price) {
    super.getRealPrice(price);
  }
}
