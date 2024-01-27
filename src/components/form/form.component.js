import { addTask, closeDialog } from "../../data/data.js";
import { Button } from "../button/button.component.js";

export function FormForNewTask() {
  const formElement = document.createElement("form");

  const titleElement = document.createElement("h2");
  titleElement.textContent = "Add new task";

  const labelElement = document.createElement("label");
  labelElement.classList.add("form-label");
  labelElement.htmlFor = "createTask";
  labelElement.textContent = "please write the name of the task";

  const fieldElement = document.createElement("input");
  fieldElement.classList.add("form-control");
  fieldElement.id = "createTask";

  const buttonsBlockElement = document.createElement("div");
  buttonsBlockElement.classList.add("btn-lg");

  const saveElement = Button("Save", () => {
    addTask(fieldElement.value);
    closeDialog();
  });

  const closeElement = Button("Close", () => {
    closeDialog();
  });

  buttonsBlockElement.append(saveElement, closeElement);

  formElement.append(
    titleElement,
    labelElement,
    fieldElement,
    buttonsBlockElement
  );
  return formElement;
}
