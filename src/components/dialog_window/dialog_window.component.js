import { FormForNewTask } from "../form/form.component.js";

export function DialogWindow() {
  const containerElement = document.createElement("dialog");
  containerElement.open = false;

  const formElement = FormForNewTask();

  containerElement.append(formElement);
  return containerElement;
}
