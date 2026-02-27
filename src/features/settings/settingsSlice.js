/**
 * Redux slice responsible for managing
 * game configuration settings.
 *
 * Currently manages:
 * - Selected difficulty level
 *
 * The difficulty value is persisted in localStorage
 * under the key "difficult".
 *
 * @module features/settings/settingsSlice
 */
import { createSlice } from "@reduxjs/toolkit"

const savedDifficulty = localStorage.getItem("difficult");
/**
 * Initial Redux state for settings slice.
 *
 * Difficulty is loaded from localStorage if available.
 * If no saved value exists, the default difficulty is "easy".
 *
 * @type {Object}
 * @property {string} difficulty - Selected difficulty level.
 */
const initialState = {
    difficulty: savedDifficulty ? JSON.parse(savedDifficulty) : "easy"
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        /**
         * Updates the current difficulty level.
         *
         * @param {Object} state - Current Redux state.
         * @param {Object} action - Redux action object.
         * @param {string} action.payload - New difficulty level
         *                                   ("easy", "medium", "hard").
         */
        setDifficulty: (state, action) => {
            state.difficulty = action.payload;
        }
    }
})

export const { setDifficulty } = settingsSlice.actions;
export default settingsSlice.reducer;