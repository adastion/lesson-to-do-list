export const data = {
  todolist: {
    title: "My to do lists ",
    tasks: [
      {
        id: crypto.randomUUID(),
        title: "Learn HTML",
      },
      {
        id: crypto.randomUUID(),
        title: "Learn CSS",
      },
      {
        id: crypto.randomUUID(),
        title: "Learn JS",
      },
      {
        id: crypto.randomUUID(),
        title: "Learn React",
      },
    ],
    dialogWindow: false,
  },
};

// subscribe
let _notifiSubscribe = null;

export function subscribe(subscriber) {
  _notifiSubscribe = subscriber;
}

// CRUD operation
export function deleteTask(taskId) {
  let filteredTasks = null;

  filteredTasks = data.todolist.tasks.filter((task) => {
    if (task.id !== taskId) {
      return task;
    }
  });

  data.todolist.tasks = filteredTasks;
  _notifiSubscribe();
}

export function addTask(nameTask) {
  const newTask = {
    id: crypto.randomUUID(),
    title: nameTask,
  };

  data.todolist.tasks.push(newTask);
  _notifiSubscribe();
}

// state
export function openeDialog() {
  data.todolist.dialogWindow = true;
  _notifiSubscribe();
}

export function closeDialog() {
  data.todolist.dialogWindow = false;
  _notifiSubscribe();
}
