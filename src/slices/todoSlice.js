import { createSlice, nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const initialState = {
  todos: todos,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload[0],
        isDone: action.payload[1],
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
      toast.success("Task added");
    },
    markDone: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      toast.success("Task removed");
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, markDone } = todoSlice.actions;

export default todoSlice.reducer;
