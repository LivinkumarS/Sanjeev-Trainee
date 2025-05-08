// Asyc function

// console.log("Step1");

// let word="hello"

// setTimeout(()=>{
//   word="world"
// },5000)

// console.log(word);

// Handling Asychronous function

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((result) => {
//     result.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async Await function

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const final = await res.json();
  console.log(final);
};

fetchData();

console.log("step 2");
