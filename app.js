const h1 = document.querySelector("h1");

// document.querySelector("button").addEventListener("click", (event) => {
//   console.log(event.target);
//   h1.textContent = parseInt(h1.textContent) + 1;
// });

function changeNum(event) {
  console.log(event.target);
  h1.textContent = parseInt(h1.textContent) + 1;
}
