import { Task } from "./task/task.component.js";

export function TasksList(tasks) {
  const containerElement = document.createElement("ol");
  containerElement.classList.add("list-group", "list-group-numbered");
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    containerElement.append(Task(task.title, task.id));
  }

  return containerElement;
}
