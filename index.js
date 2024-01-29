import { Todolist } from "./src/components.todolistData.component.js";
import { data, subscribe } from "./src/data/data.js";

const rootElement = document.getElementById("root");
function refreshUI() {
  rootElement.classList.add("bg-secondary");
  rootElement.innerHTML = "";

  const todolistElement = Todolist(data);
  rootElement.append(todolistElement);
}

refreshUI();
subscribe(refreshUI);
