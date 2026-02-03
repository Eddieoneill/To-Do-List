const inputDiv = document.querySelector(".inputContainer");
const inputButton = document.createElement("button");
const inputTextField = document.querySelector(".inputTextField");
const lists = document.querySelector(".lists");
let toDoList = [];

inputButton.textContent = "Submit";
inputButton.type = "button";

inputButton.addEventListener("click", function () {
  createList(inputTextField.textContent);
  console.log(toDoList[0].textContent);
});

inputDiv.appendChild(inputButton);
inputTextField.placeholder = "Type here...";

const createList = (val) => {
  let toDoElement = document.createElement("label");

  toDoElement.textContent = val.textContent;
  inputTextField.textContent = "";

  toDoList.push(toDoElement);
};
