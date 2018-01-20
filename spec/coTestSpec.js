const expect = require('chai').expect;

const CarInsurance = require('../src/car_insurance');
const FullCoverage = require('../src/product/full_coverage');
const Product = require('../src/product/product');
const MegaCoverage = require('../src/product/mega_coverage');
const SuperSale = require('../src/product/super_sale');
const SpecialFullCoverage = require('../src/product/special_full_coverage');

describe("Full Coverage", function() {

  it("actually increases in price the older it gets", function() {
    const carInsurance = new CarInsurance([ new FullCoverage("full coverage Test", 1, 5) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].price).equal(6);
  });

  it("actually increases in price the older it gets until 50", function() {
    const carInsurance = new CarInsurance([ new FullCoverage("full coverage Test", 1, 50) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].price).equal(50);
  });

});

describe("Mega Coverage", function() {

  it("never has to be decreases in price", function() {
    const carInsurance = new CarInsurance([ new MegaCoverage("mega coverage Test", 1, 3) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].price).equal(3);
  });

  it("never has to be sold", function() {
    const carInsurance = new CarInsurance([ new MegaCoverage("mega coverage Test", 1, 3) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].sellIn).equal(1);
  });

});


describe("Special Full Coverage", function() {

  it("price increases by 2 when there are 10 days or less", function() {
    const carInsurance = new CarInsurance([ new SpecialFullCoverage("SpecialFullCoverage Test", 9, 10) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].price).equal(12);
  });

  it("by 3 when there are 5 days or less", function() {
    const carInsurance = new CarInsurance([ new SpecialFullCoverage("SpecialFullCoverage Test", 3, 10) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].price).equal(13);
  });

  it("price drops to 0 when no more days left (and the product is not valid anymore).", function() {
    const carInsurance = new CarInsurance([ new SpecialFullCoverage("SpecialFullCoverage Test", 0, 10) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].price).equal(0);
  });

});


describe("Super Sale", function() {

  it("price decrease as twice as normal", function() {
    const carInsurance = new CarInsurance([ new SuperSale("Super Sale Test", 9, 10) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].price).equal(8);
  });

  it("price cannot be less than 0", function() {
    const carInsurance = new CarInsurance([ new SuperSale("Super Sale Test", 9, 1) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].price).equal(0);
  });

});
