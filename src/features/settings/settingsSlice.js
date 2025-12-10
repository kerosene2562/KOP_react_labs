import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    difficulty: "easy"
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setDifficulty: (state, action) => {
            state.difficulty = action.payload;
        }
    }
})

export const { setDifficulty } = settingsSlice.actions;
export default settingsSlice.reducer;