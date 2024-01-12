import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
}

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
    }
})

export const {toggleDarkMode} = darkModeSlice.actions;

export default darkModeSlice.reducer