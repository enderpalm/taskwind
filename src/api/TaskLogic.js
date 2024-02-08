export class Task {
    constructor(name, completed) {
        this.name = name;
        this.id = new Date().getTime();
        this.completed = completed;
    }
}

export const addTask = (taskName, prevTask ,taskSet) => {
   let combinedTask = prevTask ? [...prevTask, new Task(taskName, false)] : [new Task(taskName, false)];
   taskSet(combinedTask);
};

export const changeTaskStatus = (taskId, prevTask, taskSet) => {
    taskSet(
        prevTask.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        )
    );
}

export const deleteTask = (taskId, prevTask, taskSet) => {
    taskSet(prevTask.filter((task) => task.id !== taskId));
}