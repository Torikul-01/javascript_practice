let price=200;
let quantity=3;
let Discount=10;

let Total=price*quantity;
let DiscountAmount=(Total*Discount)/100;
let finalPrice=Total-DiscountAmount;

console.log('total Price:' +Total);
console.log('Discount Amount:' +DiscountAmount);
console.log('Final Price:' +finalPrice);
