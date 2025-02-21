import { HIGH, MEDIUM, LOW, UPCOMING, OVERDUE, COMPLETED } from "@/app/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks : [
    { id: 1, title: 'Plan project roadmap', description: 'description', dueDate: '2023-11-15', priority: HIGH, status : UPCOMING },
    { id: 2, title: 'Design new UI components', description: 'description', dueDate: '2023-11-20', priority: MEDIUM, status : UPCOMING },
    { id: 3, title: 'Fix login page bug', description: 'description', dueDate: '2023-10-30', priority: HIGH, status : OVERDUE},
    { id: 4, title: 'Update documentation', description: 'description', dueDate: '2023-11-05', priority: HIGH, status : OVERDUE},
    { id: 5, title: 'Set up CI/CD pipeline', description: 'description', dueDate: '2023-11-01', priority: HIGH, status : COMPLETED },
    { id: 6, title: 'Deploy v1.0.0', description: 'description', dueDate: '2023-11-10', priority: HIGH, status : COMPLETED },
  ]
}

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
      }
        },
      },
});

export const { addTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;