// const age = Number(prompt("ente your age "))
// if (age>=10 && age<=20){
//     console.log("your age is between 10 to 20")
// }
// else{
//     console.log("your age is not between 10 to 20")
// }

// const fruits = {
//   papaya: "50",
//   orange: "90",
//   mango: "65",
//   apple: "43",
// };

//program to find the price of fruits

// let fruit = prompt("enter fruit name");
// fruit = fruit.toUpperCase();
// fruit = fruit.toLowerCase();

// // console.log(fruit)

// switch (fruit) {
//   case "papaya":
//     console.log("papaya price is 45 $");
//     break;
//   case "orange":
//     console.log("orange price is 45 $");
//     break;
//   case "apple":
//     console.log(" price of apple is 45 $");
//     break;
//   case "mango":
//     console.log("price of mango is 96");
//     break;
//   default:
//     console.log("no fruit selected");
// }

// prgram to find the value which is divisible by 2 and 3

// const num = Number(prompt("enter a number"));
// if (num%2 == 0){
//     console.log("number is divisible by 2")
// }
// else if ( num%3 == 0){
//     console.log("number is divisible by 3")
// }
// else{
//     console.log("number is not divisible by 2 and 3")
// }

// make a program using ternary operator

// let age = Number(prompt("enter your age"));
// let a = age >= 18 ? "you can drive" : "you can't drive";
// console.log(a);

// using loops

// for(let i=0;  i<=690; i++)
// console.log(i);

// let sum = 0
// let n = prompt("enter a number")
// n = Number.parseInt

// access variable and keys in object with the help of (for in loop)

// let numbers = {
//   ajay: 10,
//   mahi: 10,
//   hardik: 7,
//   lavish: 2,
// };
// for (let a in numbers) {
//   console.log("the number of " +a+ " is "+ numbers[a]);
// }

// for of loop

// let obj = {
//     goutam : "A",
//     nidhi : "B",
//     jay: "A+"
// }
// for(let b of "jay"){
//     console.log(b);

// }

// while loop

// let num = Number(prompt("enter a number"))
// // num = Number.parseInt();
// let i = 0;
// while (num > i) {
//   console.log(i)
//   i++;
// }

//  do white loop (isme pehle block run hota hai fhir condition check hoti hai)

// let num = Number(prompt("enter a number"))
// num = Number.parseInt(num);
// let i = 10;
// do{
// console.log(i)
// i++;
// }
// while (num > i)

// functions in javascript
// sum function

// function sum(x, y) {
//   console.log("done");
//   return (x + y) / 2;
// }
// let a = 4;
// let b = 5;
// let c = 6;
// let d = 19;

// console.log(sum(a, b));
// console.log(sum(c, b));
// console.log(sum(d, b));
// console.log(sum(a, c));

// arrow function

// const sub = (g, h, i) => {
//   return g - h - i;
// };
// let ajay = 43
// let dinesh = 30
// let durgesh = 45
// console.log(sub(ajay , dinesh , durgesh ))

// const fun = () => {
//     return "hi"
// }
// let v = fun()
// console.log(v)

// function logic ko separate karne ke liye use kiye jate hai 

// write a program to print the marks of student in an object using for loop 

// let obj = {
//     ajay : 34,
//     lavish :2,
//     prachi : 30000
// }
// for(let a in obj){
//     console.log("the marks of " + a +"=" + obj[a])
// }