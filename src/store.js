import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "/src/features/settings/settingsSlice.js";
import resultsSlice from "/src/features/results/resultsSlice.js";


export const store = configureStore({
    reducer: {
        settings: settingsSlice,
        results: resultsSlice
    }
})

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("difficult", JSON.stringify(state.settings.difficulty));
  localStorage.setItem("gameSave", JSON.stringify(state.results));
});