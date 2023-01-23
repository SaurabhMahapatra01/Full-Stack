var num1 = 8
var num2 = 9

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2); 
// console.log(num1>num2);


var SellingPrice = prompt("Price : ");
var ListingPrice = 799;

var DiscountPercent = ((ListingPrice - SellingPrice) / ListingPrice) * 100;

console.log("Discount Percent is " + DiscountPercent)

var ActualDisPercent = Math.round(DiscountPercent);
console.log(ActualDisPercent + "% off");