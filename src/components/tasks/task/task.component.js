import { deleteTask } from "../../../data/data.js";
import { Button } from "../../button/button.component.js";

export function Task(title, id) {
  const containerElement = document.createElement("li");
  containerElement.classList.add("list-group-item");
  containerElement.textContent = title;

  containerElement.addEventListener("dblclick", () => {});

  const deleteButtonElement = Button("X", () => deleteTask(id));

  containerElement.append(deleteButtonElement);
  return containerElement;
}
