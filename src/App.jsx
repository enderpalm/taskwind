import { useEffect, useState } from "react";
import { Task, addTask } from "./api/TaskLogic";
import InputBar from "./components/InputBar";
import TaskPageButton from "./components/TaskPageButton";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [completePage, setCompletePage] = useState(false);
  const [taskList, setTaskList] = useState(
    window.localStorage.getItem("taskList")
      ? JSON.parse(window.localStorage.getItem("taskList"))
      : []
  );

  const pendingList = taskList.filter((task) => !task.completed);
  const completedList = taskList.filter((task) => task.completed);

  const [pendingCount, setPendingCount] = useState(pendingList.length);
  const [completedCount, setCompletedCount] = useState(completedList.length);

  useEffect(() => {
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    setPendingCount(pendingList.length);
    setCompletedCount(completedList.length);
  },[taskList, pendingList, completedList]);

  return (
    <>
      <div>
        <h1 className='text-4xl text-center font-bold py-4'>To Do List</h1>
      </div>
      <div className='flex justify-center mb-4'>
        <InputBar
          callback={addTask}
          prevTask={taskList}
          taskState={setTaskList}
        />
      </div>
      <div className='flex flex-warp gap-2 justify-center'>
        <TaskPageButton
          text='Pending'
          count={pendingCount}
          active={!completePage}
          onClick={() => {
            setCompletePage(false);
          }}
        />
        <TaskPageButton
          text='Completed'
          count={completedCount}
          active={completePage}
          onClick={() => {
            setCompletePage(true);
          }}
        />
      </div>
      <div className='flex justify-center'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 justify-center gap-4 mt-4'>
          {taskList.filter((task) => task.completed === completePage).map((task, index) => {
            return (
              <TaskItem key={index} taskObj={task} prevTask={taskList} taskSet={setTaskList}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
