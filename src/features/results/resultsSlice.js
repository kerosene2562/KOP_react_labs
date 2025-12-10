import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    correctAnswers: 0,
    lastGameCorrectAnswers: 0,
    totalGames: 0,
    totalTasks: 0
}

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
        }
    }
})

export const { incrementCorrectAnswersRTK, setLastGameCorrectAnswersRTK, incrementTotalGamesRTK, incrementTotalTasksRTK } = resultsSlice.actions;
export default resultsSlice.reducer;