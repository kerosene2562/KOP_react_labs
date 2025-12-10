import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "/src/features/settings/settingsSlice.js";
import resultsSlice from "/src/features/results/resultsSlice.js";


export const store = configureStore({
    reducer: {
        settings: settingsSlice,
        results: resultsSlice
    }
})