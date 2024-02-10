import { deleteTask } from "../../../data/data.js";
import { Button } from "../../button/button.component.js";

export function Task(title, id, completed) {
  const containerElement = document.createElement("li");
  containerElement.classList.add("list-group-item");
  containerElement.textContent = title;

  if (completed) {
    containerElement.classList.remove("not-completed");
  } else {
    containerElement.classList.add("not-completed");
  }

  containerElement.addEventListener("dblclick", () => {});

  const deleteButtonElement = Button("X", () => deleteTask(id));

  containerElement.append(deleteButtonElement);
  return containerElement;
}
