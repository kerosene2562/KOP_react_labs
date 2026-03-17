/**
 * Redux slice responsible for managing
 * game configuration settings.
 */
import { createSlice } from "@reduxjs/toolkit"
import { hasConsent } from "../../utils";

const savedDifficulty = hasConsent("preferences")
    ? localStorage.getItem("difficulty") || localStorage.getItem("difficult")
    : null;

const initialState = {
    difficulty: savedDifficulty ? JSON.parse(savedDifficulty) : "easy"
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
