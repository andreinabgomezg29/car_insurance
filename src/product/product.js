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
   var price = 0;
   if (this.sellIn >= 0) {
     price = this.price - 1;
   } else if (this.sellIn < 0) {
     price = this.price - 2;
   } else {
     price = this.price;
   }
   this.getRealPrice(price);
 }

  getRealPrice(price){
    price = Math.max(0, price);
    price =  Math.min(price, 50);
    this.price = price;
  }

 getName() {
   return this.name;
 }
}

module.exports = Product;
