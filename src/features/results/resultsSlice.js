import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid";

function getUserId() 
{
    try 
    {
        let id = localStorage.getItem("uuid");
        if (!id) {
            id = uuidv4();
            localStorage.setItem("uuid", id);
        }

        return id;
    } 
    catch (e) 
    {
        console.error("Error accessing localStorage:", e);
        return null;
    }
}

const userId = getUserId();

const savedResults = localStorage.getItem(`${userId}_gameSave`);

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
            localStorage.setItem(`${userId}_gameSave`, JSON.stringify(state));
        },
        setLastGameCorrectAnswersRTK: (state, action) => {
            state.lastGameCorrectAnswers = action.payload;
            localStorage.setItem(`${userId}_gameSave`, JSON.stringify(state));
        },
        incrementTotalGamesRTK: (state) => {
            state.totalGames += 1;
            localStorage.setItem(`${userId}_gameSave`, JSON.stringify(state));
        },
        incrementTotalTasksRTK: (state, action) => {
            state.totalTasks += action.payload;
            localStorage.setItem(`${userId}_gameSave`, JSON.stringify(state));
        }
    }
})

export const { incrementCorrectAnswersRTK, setLastGameCorrectAnswersRTK, incrementTotalGamesRTK, incrementTotalTasksRTK } = resultsSlice.actions;
export default resultsSlice.reducer;