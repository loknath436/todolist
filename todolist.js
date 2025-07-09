const text = document.getElementById("textfield");
const over = document.getElementById("listcontainer");



function todolist() {
  if (text.value === "") {
    alert("pls type something");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = text.value;
    console.log(li);
    over.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);

  }
  text.value = "";
  savedata();
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }

},);

function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showtask();







