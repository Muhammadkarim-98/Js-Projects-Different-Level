// console.log('pop');

const res = require("express/lib/response");

// function one() {
//     let a = 1;
//     console.log(a)
// }

// function two() {
//     let b = 2;
//     console.log(b)
// }
// one()
// two()
//
// function outer() {
//     let a = 1

//     function inner() {
//         let b = 2
//         console.log(b + a)
//     }
//     inner()
// }
// outer()
//
// const spending_threshold = 200;
// const tax_rate = 0.08;
// const phone_price = 99.99;
// const accessory_price = 9.99;

// let bank_balance = 303.91;
// let amount = 0;

// function calcTax(amount) { return amount * tax_rate };

// function formatAmount(amount) { return "$" + amount.toFixed(2) };

// while (amount < bank_balance) {
//     amount = amount + phone_price;
//     if (amount < spending_threshold) { amount = amount + accessory_price }
// }
// amount = amount + calcTax(amount);
// console.log("your purchase: " + formatAmount(amount)) // $334.76

// let obj = {
//     a: 'hello world',
//     b: 34
// };
// console.log(obj['a'])

// function foo() {
//     console.log('ha nima?')
// }
// console.log(typeof foo); // function
// let car = ""
// console.log(typeof car); // string
//
// let a = 5 ** 2
// let p = 6 % 4
// console.log(p)
//
// let text1 = 'A';
// let text2 = 'B';
// let result = text1 < text2;
// console.log(result) // true

// console.log(Boolean("")) // false

// switch (new Date().getDate()) {
// 	case true:
// 		console.log('this one true');
// 		break;
// 	case 10:
// 		console.log('September');
// 		break;
// 	case 90:
// 		console.log(77)
// 		break;
// 	default:
// 		console.log('nothing')
// } // September

// for loop

// let t = 'September'
// let g = ''
// for (let i = 0; i < t.length; i++) {
//     g += t[i]
// }
// console.log(g) // September

// for in

// const brother = { name: "Saidakbar", surname: "Salimov", age: 21, situation: "middle", family: "no" };
// let y = '';
// for (z in brother) { y += brother[z] + ", " };
// console.log(y)

// for of

const cars = "Matiz";
let text = "";
for (z of cars) {
    text += z;
    console.log(z)
}