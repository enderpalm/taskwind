import { useState } from "react";
import InputBar from "./components/InputBar";
import TaskPageButton from "./components/TaskPageButton";

const App = () => {
  const [completePage, setCompletePage] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  return (
    <>
      <div>
        <h1 className='text-4xl text-center font-bold py-4'>To Do List</h1>
      </div>
      <div className='flex justify-center mb-4'>
        <InputBar />
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
    </>
  );
};

export default App;
