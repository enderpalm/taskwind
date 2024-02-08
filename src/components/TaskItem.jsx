import { changeTaskStatus, deleteTask } from "../api/TaskLogic";

const TaskItem = ({key, taskObj, prevTask, taskSet}) => {
  return (
    <div className='flex p-2 rounded-lg bg-idle gap-2'>
      <p className='flex-grow'>{taskObj.name}</p>
      <button
        className='p-1.5 rounded-lg hover:bg-accent_glow_hover hover:text-accent_hover
        text-sm bg-accent_glow text-accent flex-none'
        onClick={() => {
          changeTaskStatus(taskObj.id, prevTask, taskSet)
        }}
      >
        {taskObj.completed ? 'Undo' : 'Complete'}
      </button>
      <button
        className='p-1.5 rounded-lg hover:bg-accent_glow_hover hover:text-accent_hover
        text-sm bg-accent_glow text-accent flex-none'
        onClick={() => {
          deleteTask(taskObj.id, prevTask, taskSet)
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem