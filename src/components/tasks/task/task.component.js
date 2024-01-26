import { data, deleteTask } from "../../../data/data.js";
import { Button } from "../../button/button.component.js";

export function Task(title, id) {
  const containerElement = document.createElement("li");
  containerElement.textContent = title;

  const deleteButtonElement = Button("X", () => deleteTask(id));

  containerElement.append(deleteButtonElement);
  return containerElement;
}
