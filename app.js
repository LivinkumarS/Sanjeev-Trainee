let ul = document.querySelector("ol");
let inp = document.querySelector("input");
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", () => {
  let task = inp.value;
  let text = task + " <button onclick='delItem(event)'>del</button>";
  let element = document.createElement("li");
  element.innerHTML = text;

  ul.appendChild(element);

  inp.value = "";
});


function delItem(event){
    event.target.parentElement.remove();
}