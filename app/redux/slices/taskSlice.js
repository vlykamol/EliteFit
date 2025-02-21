import { HIGH, MEDIUM, LOW } from "@/app/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks : {
    upcoming: [
      { id: 1, title: 'Plan project roadmap', description: 'description', dueDate: '2023-11-15', priority: HIGH },
      { id: 2, title: 'Design new UI components', description: 'description', dueDate: '2023-11-20', priority: MEDIUM },
    ],
    overdue: [
      { id: 3, title: 'Fix login page bug', description: 'description', dueDate: '2023-10-30', priority: HIGH },
      { id: 4, title: 'Update documentation', description: 'description', dueDate: '2023-11-05', priority: HIGH },
    ],
    completed: [
      { id: 5, title: 'Set up CI/CD pipeline', description: 'description', dueDate: '2023-11-01', priority: HIGH },
      { id: 6, title: 'Deploy v1.0.0', description: 'description', dueDate: '2023-11-10', priority: HIGH },
    ]
  }
}

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value += 1;
    },
    remove: (state, action) => {
      state.value -= 1;
    },
    edit: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { add, remove, edit } = taskSlice.actions;
export default taskSlice.reducer;