'use client'

import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { HIGH, LOW, MEDIUM, UPCOMING } from "../constants";
import { addTask } from "../redux/slices/taskSlice";

export default function AddTask() {
  const id = useId();

  const dispatch = useDispatch()

  const [task, setTask] = useState({
    id: id,
    title: "",
    description: "",
    dueDate: "",
    priority: MEDIUM,
    status: UPCOMING,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task))
    setTask({
      id: id,
      title: "",
      description: "",
      dueDate: "",
      priority: MEDIUM,
      status: UPCOMING,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-4 bg-gray-100 rounded">
      <h2 className="text-lg mb-2">Add Task</h2>
      <input
        type="text"
        name="title"
        placeholder="Task Name"
        value={task.title}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
        required
      />
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
      >
        <option value={HIGH}>High</option>
        <option value={MEDIUM}>Medium</option>
        <option value={LOW}>Low</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
}
