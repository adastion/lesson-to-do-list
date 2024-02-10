import { Todolist } from "./src/components.todolistData.component.js";
import { data, subscribe } from "./src/data/data.js";

const rootElement = document.getElementById("root");
async function refreshUI() {
  rootElement.classList.add("bg-secondary");
  rootElement.innerHTML = "";

  const todolistElement = await Todolist(data);
  console.log( 'render')

  rootElement.append(todolistElement);
}

refreshUI();
subscribe(refreshUI);


