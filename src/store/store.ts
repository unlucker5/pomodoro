import { configureStore } from '@reduxjs/toolkit'
import  timerReducer  from './timer/reducer'
import  actionsReducer from './actions/reducer'
import todayStatisticsReducer from './todayStatistics/reducer'
import totalStatisticsReducer from './totalStatistics/reducer'

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    actions: actionsReducer,
    todayStatistics: todayStatisticsReducer,
    totalStatistics: totalStatisticsReducer
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch