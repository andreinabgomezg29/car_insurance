class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    this.sellIn--;
    this.setPrice();
  }

 setPrice(){
   if (this.price > 2 && this.sellIn >= 0) {
     this.price = this.price - 2;
   } else if (this.price > 4 && this.sellIn < 0) {
     this.price = this.price - 4;
   } else {
     this.price = this.price;
   }
 }

 getName() {
   return this.name;
 }
}

class FullCoverage extends Product {
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
    if (this.price < 50) {
      this.price = this.price + 1;
    } else {
      this.price = this.price;
    }
  }
}

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
}

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
    if (this.sellIn == 0){
      this.price = 0;
    } else if (this.sellIn > 10){
      super.setPrice();
    } else if (5 < this.sellIn < 11){
      if (this.price < 48) {
        this.price = this.price + 2;
      } else {
        this.price = this.price;
      }
    } else {
      if (this.price < 47) {
        this.price = this.price + 3;
      } else {
        this.price = this.price;
      }
    }
  }
}

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

  setPrice(){
    if (this.price  50) {
      this.price = this.price + 1;
    } else {
      this.price = this.price;
    }
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    this.products.forEach((product) => {
      product.updatePrice();
    })
    return this.products;
  }
}

module.exports = {
  Product,
  FullCoverage,
  MegaCoverage,
  SpecialFullCoverage,
  SuperSale,
  CarInsurance
}
