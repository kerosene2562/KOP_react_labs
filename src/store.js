import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "/src/features/settings/settingsSlice.js";
import resultsSlice from "/src/features/results/resultsSlice.js";
import {
  getResultsStorageKey,
  hasConsent,
  removePreferenceStorage,
  removeStatisticsStorage,
} from "./utils";

export const store = configureStore({
    reducer: {
        settings: settingsSlice,
        results: resultsSlice
    }
})

store.subscribe(() => {
  const state = store.getState();

  if (hasConsent("preferences")) {
    localStorage.setItem("difficulty", JSON.stringify(state.settings.difficulty));
    localStorage.setItem("difficult", JSON.stringify(state.settings.difficulty));
  } else {
    removePreferenceStorage();
  }

  if (hasConsent("statistics")) {
    const resultsKey = getResultsStorageKey();
    if (resultsKey) {
      localStorage.setItem(resultsKey, JSON.stringify(state.results));
    }
  } else {
    removeStatisticsStorage();
  }
});
