// set global variables
const toDoTasks = {
  tasks: [],
};

const routineItems = {
  items: [],
};

const journal = {
  journals: {
    date: "",
    text: ""
  },
};

// set up buttons/listeners
const addTaskBtn = document.querySelector("#add-task");
const saveJournalBtn = document.querySelector("#save-journal");
const newRoutineBtn = document.querySelector("#new-routine");
const taskListEl = document.querySelector("#to-do-items");
const routineListEl = document.querySelector("#routine-items");


// create delete button and add to each item (for new item)
const close = document.getElementsByClassName("close");
const i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    // set display to none
    const div = this.parentElement;
    div.style.display = "none";
  };
}

// cross out item when you click on i
const list = document.querySelector("ul");
taskListEl.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

routineListEl.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("green");
    }
  },
  false
);

// create new list item when you click the add button
function newElement() {
  const newLi = document.createElement("li");
  const toDoValue = document.getElementById("to-do-input").value;
  const routineValue = document.getElementById("routine-input").value;

  const taskText = document.createTextNode(toDoValue);
  const routineText = document.createTextNode(routineValue);



  // catch error if no input when clicking add
  if (toDoValue === "" && routineValue === "") {
    alert("write something first");
  } else if (routineValue === "") {

    //set list text
    newLi.appendChild(taskText);
    document.getElementById("to-do-items").appendChild(newLi);

    // add input value to the to do array
    toDoTasks.tasks.push(toDoValue);

    // save array to local storage
    localStorage.setItem("to-do", toDoTasks.tasks);

    // reset input box
      document.getElementById("to-do-input").value = "";
  } else if (toDoValue === "") {
      newLi.appendChild(routineText);
    document.getElementById("routine-items").appendChild(newLi);

    // add input value to the to do array
    routineItems.items.push(routineValue);

    // save array to local storage
    localStorage.setItem("routines", routineItems.items);

    // reset input box
    document.getElementById("routine-input").value = "";
  } else {
    console.log("something went wrong");
  }



  const span = document.createElement("span");
  const txt = document.createTextNode("\u00d7");
  span.className = "close";
  span.appendChild(txt);
  newLi.appendChild(span);

  // delete the item when you click close
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";

      // remove item from local storage
      const deleteItem = div.innerText.slice("0", "-1");
      const taskArray = localStorage.getItem("to-do").split(",");
      const taskIndex = taskArray.indexOf(deleteItem);
      taskArray.splice(taskIndex, 1);
      console.log(taskArray);
      const taskString = taskArray.join(",");

      localStorage.setItem("to-do", taskString);
    };
  }
}

function loadSaved() {
  const savedTasks = localStorage.getItem("to-do");
  const savedRoutines = localStorage.getItem("routines");

  if (savedTasks) {
    const savedTasksList = savedTasks.split(",");

    for (i = 0; i < savedTasksList.length; i++) {
      // create task
      const taskLi = document.createElement("li");
      taskLi.textContent = savedTasksList[i];
      console.log(taskLi);

      // create close btn
      const span = document.createElement("span");
      const txt = document.createTextNode("\u00d7");
      span.className = "close";
      span.appendChild(txt);
      taskLi.appendChild(span);

      // append to page
      taskListEl.appendChild(taskLi);

      // keep tasks in local storage
      // add this task to the to do array
      toDoTasks.tasks.push(savedTasksList[i]);

      // save array to local storage
      localStorage.setItem("to-do", toDoTasks.tasks);

      // delete the item when you click close
      for (let t = 0; t < close.length; t++) {
        close[t].onclick = function () {
          const div = this.parentElement;
          div.style.display = "none";

          // remove item from local storage
          const deleteItem = div.innerText.slice("0", "-1");
          const taskArray = localStorage.getItem("to-do").split(",");
          const taskIndex = taskArray.indexOf(deleteItem);
          taskArray.splice(taskIndex, 1);
          console.log(taskArray);
          const taskString = taskArray.join(",");

          localStorage.setItem("to-do", taskString);
        };
      }
    }
  }

  if (savedRoutines) {
    const savedRoutinesList = savedRoutines.split(",");

    for (i = 0; i < savedRoutinesList.length; i++) {
      // create task
      const routineLi = document.createElement("li");
      routineLi.textContent = savedRoutinesList[i];
      console.log(routineLi);

      // create close btn
      const span = document.createElement("span");
      const txt = document.createTextNode("\u00d7");
      span.className = "close";
      span.appendChild(txt);
      routineLi.appendChild(span);

      // append to page
      routineListEl.appendChild(routineLi);

      // keep tasks in local storage
      // add this task to the to do array
      routineItems.items.push(savedRoutinesList[i]);

      // save array to local storage
      localStorage.setItem("routines", routineItems.items);

      // delete the item when you click close
      for (let t = 0; t < close.length; t++) {
        close[t].onclick = function () {
          const div = this.parentElement;
          div.style.display = "none";

          // remove item from local storage
          const deleteItem = div.innerText.slice("0", "-1");
          const routineArray = localStorage.getItem("routines").split(",");
          const routineIndex = routineArray.indexOf(deleteItem);
          routineArray.splice(routineIndex, 1);
          console.log(routineArray);
          const routineString = routineArray.join(",");

          localStorage.setItem("routines", routineString);
        };
      }
    }
  }
}

loadSaved();

newRoutineBtn.addEventListener("click", newElement);
addTaskBtn.addEventListener("click", newElement);