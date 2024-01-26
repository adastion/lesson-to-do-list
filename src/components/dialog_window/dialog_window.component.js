import { addTask, closeDialog } from "../../data/data.js";
import { Button } from "./../button/button.component.js";

export function DialogWindow() {
  const containerElement = document.createElement("dialog");
  containerElement.open = false;

  const titleElement = document.createElement("h2");
  titleElement.textContent = "Add new task";

  const fieldElement = document.createElement("input");
  const buttonsBlockElement = document.createElement("div");
  const saveElement = Button("Save", () => {
    addTask(fieldElement.value);
    closeDialog();
  });

  const closeElement = Button("Close", () => {
    closeDialog();
  });

  buttonsBlockElement.append(saveElement, closeElement);
  containerElement.append(titleElement, fieldElement, buttonsBlockElement);
  return containerElement;
}
