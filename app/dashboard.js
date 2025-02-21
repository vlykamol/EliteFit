'use client';

import { useDispatch, useSelector } from 'react-redux';
import { COMPLETED, OVERDUE, UPCOMING } from './constants';
import AddTask from './components/addTask';
import { editTask, removeTask } from './redux/slices/taskSlice';
import { useState } from 'react';



export default function Dashboard() {

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-8">Task Dashboard</h1>
      <AddTask />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upcoming Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Column type={UPCOMING} />
        </div>

        {/* Overdue Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Column type={OVERDUE} />
        </div>

        {/* Completed Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Column type={COMPLETED} />
        </div>
      </div>
    </div>

  )
}



function Column({ type }) {

  const tasks = useSelector((state) => state.task.tasks)

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 capitalize">{type} tasks</h2>
      <ul>
        {tasks.filter(task => task.status === type).map((task) => (
          <li key={task.id} className="mb-2 p-2 bg-gray-50 rounded">
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  )
}



function Task({ task }) {

  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    priority: task.priority
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({ ...prev, [name]: value }));
  };

  const handleEditTask = () => {
    dispatch(editTask({ id: task.id, updatedTask: editedTask }));
    setIsEditing(false);  // Close the form
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id))
  }


  return (
    <>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="border rounded p-2 mb-2 w-full"
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="border rounded p-2 mb-2 w-full"
          />
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleChange}
            className="border rounded p-2 mb-2 w-full"
          />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
            className="border rounded p-2 mb-2 w-full"
          >
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
          <button
            onClick={handleEditTask}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p className="font-medium">{task.title}</p>
          <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
          <div className='gap-2 flex justify-between items-center'>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </>
  );
}