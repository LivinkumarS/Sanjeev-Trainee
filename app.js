// Logical Operators

let val1 = true;
let val2 = false;

// console.log(val1 && val2);
// console.log(val1 || val2);
// console.log(val1 ^ val2);
// console.log(!val2);

// console.log(!val1 || !(val1 ^ val2));

console.log(
  !val1 && ((val1 && val2) || (!val1 && val2 ^ val1) || !(val1 || val2))
);

// BODMAS---> Brackets, Of, Division, Multip..,Add, Sub
