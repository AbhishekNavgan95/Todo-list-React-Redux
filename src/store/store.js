import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice"
import darkModeReducer from '../slices/DarkModeSlice'

export const store = configureStore({
    reducer : {
        todos: todoReducer,
        darkMode: darkModeReducer
    }
});