// for (let i = 0; i < 10; i++) {
//   console.log("hello"+i);
// }

// let str = "Vijay";

// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let inp = prompt("Enter word:");

// let num = 13;

// while (true) {
//   let guess = prompt("Guess the number:"); //will always return string
//   if (parseInt(guess) === num) {
//     console.log("You won");
//     break;
//   } else {
//     console.log("Try again");
//   }
// }

// let arr = [1, 2, 3, 4, 7, 5, 6, 5, 67, 7, 7656, 54, 43, 65];

// for (let element of arr) {
//   console.log(element+1);
// }

let obj1 = {
  name: "hari",
  role: "dev",
  salary: 25000,
};

for (let keyVal in obj1) {
  console.log(obj1[keyVal]);
}
