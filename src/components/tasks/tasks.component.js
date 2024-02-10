import { Task } from "./task/task.component.js";

async function getDataList() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=20"
  );
  const data = await response.json();
  console.log(data);

  return data;
}

export async function TasksList() {
  const tasks = await getDataList();

  const containerElement = document.createElement("ol");
  containerElement.classList.add("list-group", "list-group-numbered");
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    containerElement.append(Task(task.title, task.id, task.completed));
  }
  return containerElement;
}
