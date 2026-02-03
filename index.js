const inputDiv = document.querySelector(".inputContainer");
const inputButton = document.createElement("button");
const inputTextField = document.querySelector(".inputTextField");
const lists = document.querySelector(".lists");
const footer = document.querySelector("footer");
const removeAllButton = document.createElement("button");
const toDoList = [];

inputButton.textContent = "Submit";
inputButton.type = "button";
inputButton.style.backgroundColor = "#3fdf00";
inputButton.style.borderColor = "#ffffff";
inputButton.style.color = "#ffffff";
removeAllButton.textContent = "Remove All";
removeAllButton.type = "button";
footer.appendChild(removeAllButton);
inputDiv.appendChild(inputButton);
removeAllButton.style.backgroundColor = "#ffffff";
removeAllButton.style.borderColor = "#da2c2c";
removeAllButton.style.color = "#d44d4d";
inputTextField.placeholder = "Type here...";

inputButton.addEventListener("click", function () {
  if (inputTextField.value !== "") {
    createList(inputTextField.value);
  }
});

inputTextField.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && inputTextField.value !== "") {
    createList(inputTextField.value);
  }
});

removeAllButton.addEventListener("click", function () {
  lists.childNodes.forEach((element) => {
    toDoList.push(element);
  });

  for (let element of toDoList) {
    element.remove();
  }
});

const createList = (element) => {
  let toDoElement = document.createElement("li");
  let deleteButton = document.createElement("button");

  deleteButton.textContent = "Trash";
  deleteButton.type = "button";
  deleteButton.class = "delete";
  deleteButton.style.display = "none";
  deleteButton.style.backgroundColor = "#ff0000";
  deleteButton.style.borderColor = "#ffffff";
  deleteButton.style.color = "#ffffff";
  toDoElement.textContent = `${element}`;
  addAction(toDoElement);
  addRemove(deleteButton, toDoElement);
  toDoElement.insertBefore(deleteButton, toDoElement.childNodes[0]);
  lists.appendChild(toDoElement);
  inputTextField.value = "";
};

const addAction = (element) => {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = randomColorGenerater();
  });

  element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "";
  });

  element.addEventListener("click", function () {
    if (element.id === "line-through") {
      element.style.textDecoration = "";
      element.id = "";
      element.childNodes[0].style.display = "none";
    } else {
      element.id = "line-through";
      element.style.textDecoration = "line-through";
      element.childNodes[0].style.display = "";
    }
  });
};

const addRemove = (element1, element2) => {
  element1.addEventListener("click", function () {
    element2.remove();
  });
};

const randomColorGenerater = () => {
  let r = Math.floor(Math.random() * (500 - 0 + 1) + 0);
  let g = Math.floor(Math.random() * (500 - 0 + 1) + 0);
  let b = Math.floor(Math.random() * (500 - 0 + 1) + 0);

  return `rgb(${r}, ${g}, ${b})`;
};
