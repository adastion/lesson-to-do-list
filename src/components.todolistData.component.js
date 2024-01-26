import { Header } from "./components/header/header.component.js";
import { TasksList } from "./components/tasks/tasks.component.js";
import { Button } from "./components/button/button.component.js";
import { DialogWindow } from "./components/dialog_window/dialog_window.component.js";
import { data, openeDialog } from "./data/data.js";

export function Todolist(todolistData) {
  const containerElement = document.createElement("div");

  const headerEelment = Header(todolistData.todolist.title);
  const tasksListElement = TasksList(todolistData.todolist.tasks);
  const buttonsPanelElement = Button("Add task", () => {
    openeDialog();
  });
  const addTaskDialogElement = DialogWindow();
  addTaskDialogElement.open = data.todolist.dialogWindow;

  containerElement.append(
    headerEelment,
    tasksListElement,
    buttonsPanelElement,
    addTaskDialogElement
  );
  return containerElement;
}
