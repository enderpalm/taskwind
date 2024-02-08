export class Task {
    constructor(name, completed) {
        this.name = name;
        this.id = Date.now();
        this.completed = completed;
    }
}

export const addTask = (taskName, prevTask ,taskSet) => {
   let combinedTask = prevTask ? [...prevTask, new Task(taskName, false)] : [new Task(taskName, false)];
   taskSet(combinedTask);
};