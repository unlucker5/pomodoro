import { createSlice } from "@reduxjs/toolkit"

function getTodayShort() {
    const date = new Date().toLocaleDateString('ru-RU', { weekday: "short" } );
    return date;
}

function getTodayLong() {
    const date = new Date().toLocaleDateString('ru-RU', { weekday: "long" } );
    return date;
}

 const initialState = {
    todayLong: getTodayLong(),
    todayShort: getTodayShort(),
    totalTime: 0,
    totalPomodoro: 0,
    timeOnPause: 0,
    stops: 0,
}

export const todayStatisticsSlice = createSlice({
    name: 'todayStatistics',
    initialState, 
    reducers: {
        increseTotalTime: (state) => {
            state.totalTime += 1
        },
        increaseTotalPomodoro: (state) => {
            state.totalPomodoro += 1
        },
        increaseTimeOnPause: (state) => {
            state.timeOnPause += 1
        },
        increaseStops: (state) => {
            state.stops += 1
        },
    }
})

export const {
    increseTotalTime,
    increaseTotalPomodoro,
    increaseTimeOnPause,
    increaseStops,
} = todayStatisticsSlice.actions;


export default todayStatisticsSlice.reducer;