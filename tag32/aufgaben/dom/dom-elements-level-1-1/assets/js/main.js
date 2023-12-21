const liste = document.querySelector("#myList");
const input = document.querySelector("#listInput");

const addToList = () => {
  if (input.value === "") {
    alert("Bitte geben Sie einen Text ein!");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = input.value;
  liste.appendChild(li);
  input.value = "";
};

document.querySelector("#addToList").addEventListener("click", addToList);
