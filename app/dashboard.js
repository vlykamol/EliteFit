'use client';

import { useSelector } from 'react-redux';
import { useLocalStorage } from './hooks/useLocalStorage';



export default function Dashboard() {
  // State to manage tasks

  const tasks = useSelector((state) => state.task.tasks)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-8">Task Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upcoming Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">

          <Column title={'Upcoming Tasks'} tasks={tasks.upcoming} />
        </div>

        {/* Overdue Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Column title={'Overdue Tasks'} tasks={tasks.overdue} />
        </div>

        {/* Completed Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Column title={'Completed Tasks'} tasks={tasks.completed} />
        </div>
      </div>
    </div>

  )
}



function Column({ title, tasks }) {

  const handleAddTask = (id) => {

  }

  return (
    <>
      <div className='flex justify-between'>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <button
        onClick={() => handleAddTask()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
        Add Task
      </button>
        </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-2 p-2 bg-gray-50 rounded">
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  )
}


function Task({ task }) {

  const handleEditTask = () => [

  ]

  const handleRemoveTask = () => {

  }


  return (
    <>
      <p className="font-medium">{task.title}</p>
      <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
      <div className='gap-2 flex justify-between items-center'>
      <button
        onClick={() => handleAddTask()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Edit
      </button>
      <button
        onClick={() => handleAddTask()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Remove
      </button>
      </div>
    </>
  )
}