// for(let i=1; i<=5;i++){
//     console.log("Hello");
// }


let product="Wireless Mouse"
let price_per_unit=15;
let quantity=4;

let subtotal=price_per_unit*quantity;
let tex=(5*60)/100;
let total=subtotal+tex;


console.log("----Shopping Bill----");
console.log('Product: '+product);
console.log('Price per unit: '+price_per_unit);
console.log('Quantity: '+quantity);
console.log('Subtotal: '+subtotal);
console.log('Tax %5: '+tex);
console.log('Grand Total: '+total);
console.log('-----------------------');
