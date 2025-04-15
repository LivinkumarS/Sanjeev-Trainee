// object

// let obj = {
//   name: "sanjeev",
//   role: "dev",
//   favFoods: [
//     "poori",
//     "chapati",
//     "idly",
//     { mostFav: "biriyani", leastFav: "upma" },
//   ],
//   printName: () => {
//     console.log("Name is sanjeev");
//   },
// };

// console.log(obj.favFoods[3].mostFav);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// [3,4,5,6,7,8,9,10,11,12] (+2)

// [0,2,6]

// let ans = arr.map((ele, ind) => {
//   return ele*ind;
// });

// console.log(ans);

// Filter

// let arr = [1, 2, 3, 4, 5, 56, 7, 8, 9, 7, 6, 54, 35, 4, 46];
// ele>10

// [1,2,3...]

// let ans = arr.filter((ele, ind) => {
//   return ele>10;
// });

// console.log(ans);

// above 18

// let arr = [
//   { age: 27, canVote: false },
//   { age: 2, canVote: false },
//   { age: 7, canVote: false },
//   { age: 37, canVote: false },
//   { age: 7, canVote: false },
//   { age: 71, canVote: false },
//   { age: 86, canVote: false },
//   { age: 2, canVote: false },
//   { age: 25, canVote: false },
//   { age: 1, canVote: false },
//   { age: 7, canVote: false },
//   { age: 127, canVote: false },
//   { age: 67, canVote: false },
//   { age: 97, canVote: false },
// ];

// [{ age: 27, canVote: true },{ age: 2, canVote: false }]

// let ans = arr.map((ele, ind) => {
//   return { age: ele.age, canVote: ele.age > 18 };
// });

// console.log(ans);
