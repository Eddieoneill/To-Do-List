const inputDiv = document.querySelector(".inputContainer");
const inputButton = document.createElement("button");
const inputTextField = document.querySelector(".inputTextField");
const lists = document.querySelector(".lists");

inputButton.textContent = "Submit";
inputButton.type = "button";

inputButton.addEventListener("click", function () {
  createList(inputTextField.value);
});

inputDiv.appendChild(inputButton);
inputTextField.placeholder = "Type here...";

const createList = (element) => {
  let toDoElement = document.createElement("li");

  toDoElement.textContent = element;
  addAction(toDoElement);
  lists.appendChild(toDoElement);
  inputTextField.value = "";
};

const addAction = (element) => {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "#dadf97";
  });

  element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "";
  });

  element.addEventListener("click", function () {
    this.remove();
  });
};
