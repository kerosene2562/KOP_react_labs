import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid";
import { getResultsStorageKey, hasConsent } from "../../utils";

function getUserId() {
    try {
        let id = localStorage.getItem("uuid");
        if (!id) {
            id = uuidv4();
            localStorage.setItem("uuid", id);
        }

        return id;
    }
    catch (e) {
        console.error("Error accessing localStorage:", e);
        return null;
    }
}

getUserId();

const savedResultsKey = hasConsent("statistics") ? getResultsStorageKey() : null;
const savedResults = savedResultsKey ? localStorage.getItem(savedResultsKey) : null;

const initialState = savedResults
    ? JSON.parse(savedResults)
    : {
        correctAnswers: 0,
        lastGameCorrectAnswers: 0,
        totalGames: 0,
        totalTasks: 0
    };

const resultsSlice = createSlice({
    name: "results",
    initialState,
    reducers: {
        incrementCorrectAnswersRTK: (state, action) => {
            state.correctAnswers += action.payload;
        },
        setLastGameCorrectAnswersRTK: (state, action) => {
            state.lastGameCorrectAnswers = action.payload;
        },
        incrementTotalGamesRTK: (state) => {
            state.totalGames += 1;
        },
        incrementTotalTasksRTK: (state, action) => {
            state.totalTasks += action.payload;
        },
        resetResultsRTK: (state) => {
            state.correctAnswers = 0;
            state.lastGameCorrectAnswers = 0;
            state.totalGames = 0;
            state.totalTasks = 0;
        }
    }
})

export const {
  incrementCorrectAnswersRTK,
  setLastGameCorrectAnswersRTK,
  incrementTotalGamesRTK,
  incrementTotalTasksRTK,
  resetResultsRTK,
} = resultsSlice.actions;
export default resultsSlice.reducer;
