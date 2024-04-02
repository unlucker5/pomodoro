import { createSlice } from '@reduxjs/toolkit';

interface Day {
  day: string;
  fullDay: string;
  totalTime: number;
  totalPomodoro: number;
  timeOnPause: number;
  stops: number;
}

const initialState = {
  selectedDayIndex: 6,  
  period: 'thisWeek',
  graphClicked: false,
  days: [
    { day: 'Пн', fullDay: 'Понедельник', totalTime: 6000, totalPomodoro: 4, timeOnPause: 60, stops: 3 },
    { day: 'Вт', fullDay: 'Вторник', totalTime: 13454, totalPomodoro: 10, timeOnPause: 400, stops: 2 },
    { day: 'Ср', fullDay: 'Среда', totalTime: 7000 , totalPomodoro: 7, timeOnPause: 120, stops: 5 },
    { day: 'Чт', fullDay: 'Четверг', totalTime: 4400 , totalPomodoro: 4, timeOnPause: 300, stops: 8 },
    { day: 'Пт', fullDay: 'Пятница', totalTime: 16660 , totalPomodoro: 16, timeOnPause: 6000, stops: 11 },
    { day: 'Сб', fullDay: 'Суббота', totalTime: 3000 , totalPomodoro: 3, timeOnPause: 200, stops: 8 },
    { day: 'Вс', fullDay: 'Воскресенье', totalTime: 2000 , totalPomodoro: 2, timeOnPause: 100, stops: 1 }
  ],
  thisWeekDays: [
    { day: 'Пн', fullDay: 'Понедельник', totalTime: 6000, totalPomodoro: 4, timeOnPause: 60, stops: 3 },
    { day: 'Вт', fullDay: 'Вторник', totalTime: 13454, totalPomodoro: 10, timeOnPause: 400, stops: 2 },
    { day: 'Ср', fullDay: 'Среда', totalTime: 7000 , totalPomodoro: 7, timeOnPause: 120, stops: 5 },
    { day: 'Чт', fullDay: 'Четверг', totalTime: 4400 , totalPomodoro: 4, timeOnPause: 300, stops: 8 },
    { day: 'Пт', fullDay: 'Пятница', totalTime: 16660 , totalPomodoro: 16, timeOnPause: 6000, stops: 11 },
    { day: 'Сб', fullDay: 'Суббота', totalTime: 3000 , totalPomodoro: 3, timeOnPause: 200, stops: 8 },
    { day: 'Вс', fullDay: 'Воскресенье', totalTime: 2000 , totalPomodoro: 2, timeOnPause: 100, stops: 1 }
  ],
  lastWeekDays: [
    { day: 'Пн', fullDay: 'Понедельник', totalTime: 37678, totalPomodoro: 5, timeOnPause: 3572, stops: 4 },
    { day: 'Вт', fullDay: 'Вторник', totalTime: 54954, totalPomodoro: 8, timeOnPause: 4441, stops: 1 },
    { day: 'Ср', fullDay: 'Среда', totalTime: 5006 , totalPomodoro: 29, timeOnPause: 2087, stops: 6 },
    { day: 'Чт', fullDay: 'Четверг', totalTime: 22601 , totalPomodoro: 14, timeOnPause: 5170, stops: 1 },
    { day: 'Пт', fullDay: 'Пятница', totalTime: 24968 , totalPomodoro: 14, timeOnPause: 1329, stops: 15 },
    { day: 'Сб', fullDay: 'Суббота', totalTime: 29061 , totalPomodoro: 34, timeOnPause: 2648, stops: 7 },
    { day: 'Вс', fullDay: 'Воскресенье', totalTime: 20383 , totalPomodoro: 27, timeOnPause: 5659, stops: 2 }
  ],
  twoWeeksAgoDays: [
    { day: 'Пн', fullDay: 'Понедельник', totalTime: 35030, totalPomodoro: 22, timeOnPause: 5728, stops: 3 },
    { day: 'Вт', fullDay: 'Вторник', totalTime: 54213, totalPomodoro: 10, timeOnPause: 591, stops: 1 },
    { day: 'Ср', fullDay: 'Среда', totalTime: 36220 , totalPomodoro: 30, timeOnPause: 4163, stops: 2 },
    { day: 'Чт', fullDay: 'Четверг', totalTime: 33657 , totalPomodoro: 31, timeOnPause: 4375, stops: 9 },
    { day: 'Пт', fullDay: 'Пятница', totalTime: 14877 , totalPomodoro: 21, timeOnPause: 1810, stops: 10 },
    { day: 'Сб', fullDay: 'Суббота', totalTime: 35725 , totalPomodoro: 18, timeOnPause: 1694, stops: 5 },
    { day: 'Вс', fullDay: 'Воскресенье', totalTime: 42920 , totalPomodoro: 34, timeOnPause: 2901, stops: 2 }
  ],

};

export const totalStatisticsSlice = createSlice({
  name: 'totalStatistics',
  initialState,
  reducers: {
    updateDayTime: (state, action) => {
      const { day, newFullDay, newTime, newTotalPomodoro, newTimeOnPause, newStops } = action.payload;
      const dayIndex = state.thisWeekDays.findIndex((d) => d.day === day);
      if (dayIndex !== -1) {
        state.thisWeekDays[dayIndex].totalTime = newTime;
        state.thisWeekDays[dayIndex].totalPomodoro = newTotalPomodoro;
        state.thisWeekDays[dayIndex].timeOnPause = newTimeOnPause;
        state.thisWeekDays[dayIndex].stops = newStops;
      } else {
        state.thisWeekDays.push({ day, 
            fullDay: newFullDay,
            totalTime: newTime, 
            totalPomodoro: newTotalPomodoro, 
            timeOnPause: newTimeOnPause, 
            stops: newStops });
      }
    },
    updatePeriod: (state, action) => {
        state.period = action.payload
    },
    selectDayIndex: (state, action) => {
      state.graphClicked = true
      state.selectedDayIndex = action.payload;
    },
    refreshGraphClicked: (state) => { 
      state.graphClicked = false
    },
 
    updateDays: (state, action) => {
      let selectDayArray: Day[] = []
      switch (action.payload) {
        case 'thisWeek':
          selectDayArray = state.thisWeekDays
          break
          case 'lastWeek':
          selectDayArray = state.lastWeekDays
          break
          case 'twoWeeksAgo':
          selectDayArray = state.twoWeeksAgoDays
          break
          default:
            selectDayArray = [];
      }
      return {
        ...state,
        period: action.payload,
        days: selectDayArray
      }
    },
  },
});

export const {
  updateDayTime,
  updatePeriod,
  selectDayIndex,
  refreshGraphClicked,
  updateDays,
} = totalStatisticsSlice.actions;

export default totalStatisticsSlice.reducer;