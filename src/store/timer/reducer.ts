import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRunning: false,
  isPaused:false,
  time: 1500,
  pomodoroCount: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
      state.isPaused = false;
    },
    stopTimer: (state) => {
      state.isRunning = false;
      state.isPaused = true;
    },
    resetTimer: (state) => {
      state.time = 1500;
      state.isRunning = false;
      state.isPaused = false;
      state.pomodoroCount += 1;
    },
    resetPomodoroCount: (state) => {
      state.pomodoroCount = 0;
    },
    tickTimer: (state) => {
      state.time -= 1;
    },
    addTime: (state) => {
      state.time += 60;
    }
  },
});

export const { startTimer, stopTimer, resetTimer, tickTimer, addTime, resetPomodoroCount } = timerSlice.actions;

export default timerSlice.reducer;