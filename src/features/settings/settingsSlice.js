import { createSlice } from "@reduxjs/toolkit"

const savedDifficulty = localStorage.getItem("difficult");

const initialState = {
    difficulty: savedDifficulty ? JSON.parse(savedDifficulty) : "easy"
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setDifficulty: (state, action) => {
            state.difficulty = action.payload;
            localStorage.setItem("difficult", JSON.stringify(action.payload));
        }
    }
})

export const { setDifficulty } = settingsSlice.actions;
export default settingsSlice.reducer;