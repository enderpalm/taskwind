import { useEffect, useState } from "react";
import { addTask } from "./api/TaskLogic";
import InputBar from "./components/InputBar";
import TaskPageButton from "./components/TaskPageButton";

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
  });

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
      <ul>
        {taskList.map((task, index) => {
          if (task.completed === completePage) {
            return (
              <li key={task.id} className='flex justify-center'>
                <div className='flex justify-between w-10/12 max-w-md p-2 m-2 bg-idle rounded-lg'>
                  <p className='text-lg font-jetbrains'>{task.name}</p>
                  <button
                    className='bg-accent_glow text-accent p-2 rounded-lg hover:bg-accent_glow_hover hover:text-accent_hover'
                    onClick={() => {
                      let updatedList = taskList;
                      updatedList[index].completed =
                        !updatedList[index].completed;
                      setTaskList(updatedList);
                      setPendingCount(
                        updatedList.filter((task) => !task.completed).length
                      );
                      setCompletedCount(
                        updatedList.filter((task) => task.completed).length
                      );
                    }}
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </>
  );
};

export default App;
