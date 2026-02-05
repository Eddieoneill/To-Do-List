const inputDiv = document.querySelector(".inputContainer");
const inputButton = document.createElement("button");
const inputTextField = document.querySelector(".inputTextField");
const lists = document.querySelector(".lists");
const footer = document.querySelector("footer");
const removeAllButton = document.createElement("button");
const toDoList = [];

//populating the initial layout for the website
const populateInitialLayout = () => {
  inputButton.textContent = "Submit";
  inputButton.type = "button";
  inputButton.style.backgroundColor = "#3fdf00";
  inputButton.style.borderColor = "#ffffff";
  inputButton.style.color = "#ffffff";
  removeAllButton.textContent = "||||Nuke||||";
  removeAllButton.style.fontWeight = "bold";
  removeAllButton.type = "button";
  footer.appendChild(removeAllButton);
  inputDiv.appendChild(inputButton);
  removeAllButton.style.backgroundColor = "#ffffff";
  removeAllButton.style.borderColor = "#da2c2c";
  removeAllButton.style.color = "#d44d4d";
  inputTextField.placeholder = "Type here...";

  //adding listener to see if the submit button was clicked
  inputButton.addEventListener("click", function () {
    //checking to see if the text field is empty or not
    if (inputTextField.value !== "") {
      createList(inputTextField.value);
    }
  });

  //adding listener to see if the enter key was pressed
  inputTextField.addEventListener("keydown", function (event) {
    //checking to see if the text field is empty or not and the key pressed was a enter key
    if (event.key === "Enter" && inputTextField.value !== "") {
      createList(inputTextField.value);
    }
  });

  //addubg listener to see if the remove all button was pressed
  removeAllButton.addEventListener("click", function () {
    //putting all element into a array before removing
    lists.childNodes.forEach((element) => {
      toDoList.push(element);
    });

    //going through the array and removing all element from the web page
    for (let element of toDoList) {
      element.remove();
    }

    //setting the list container back to empty
    toDoList.splice(0, toDoList.length);
  });
};

//populating the list item and assosiating the remove button to it
const createList = (element) => {
  let toDoElement = document.createElement("div");
  let deleteButton = document.createElement("button");

  deleteButton.textContent = "Remove";
  deleteButton.type = "button";
  deleteButton.class = "delete";
  deleteButton.style.display = "none";
  deleteButton.style.backgroundColor = "#ffffff";
  deleteButton.style.borderColor = "#da2c2c";
  deleteButton.style.color = "#d44d4d";
  toDoElement.textContent = `${element}`;
  addAction(toDoElement);
  addRemove(deleteButton, toDoElement);
  toDoElement.insertBefore(deleteButton, toDoElement.childNodes[0]);
  lists.appendChild(toDoElement);
  inputTextField.value = "";
};

//this function adds the following event listener to the list
const addAction = (element) => {
  //adding event listener to see if the list was mouse overed
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = randomColorGenerater();
  });

  //adding event listener to see if the mouse was moved away
  element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "";
  });

  //adding event listener to see if the list was selected and line throught or line removes it
  //additionally it displays and undisplayed the remove button
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

//this function is the remove the element from the list
const addRemove = (element1, element2) => {
  element1.addEventListener("click", function () {
    element2.remove();
  });
};

//this creates a randomColor rgb combinations
const randomColorGenerater = () => {
  let r = Math.floor(Math.random() * (500 - 0 + 1) + 0);
  let g = Math.floor(Math.random() * (500 - 0 + 1) + 0);
  let b = Math.floor(Math.random() * (500 - 0 + 1) + 0);

  return `rgb(${r}, ${g}, ${b})`;
};

const fetchURL = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    return response.json();
  });
};

fetchURL(`https://pokeapi.co/api/v2/pokemon/charizard`).then((data) => {
  let url =
    data.sprites.versions[`generation-v`][`black-white`].animated.front_default;
  let url2 =
    data.sprites.versions[`generation-v`][`black-white`].animated.front_shiny;
  console.log(url2);
  let img = document.createElement("img");
  let img2 = document.createElement("img");

  img.src = url;
  img.style.height = `${50}px`;
  img.style.width = `${50}px`;
  img2.src = url2;
  img2.style.height = `${50}px`;
  img2.style.width = `${50}px`;
  footer.appendChild(img2);
  footer.insertBefore(img, footer.childNodes[0]);
});

populateInitialLayout();
