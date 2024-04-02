import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
    {
      text: '',
      time: 0,
    }
  ];
  
export const actionsSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    addAction: (state, action) => {
      const { text, time } = action.payload;
      state.push({ text, time });
    },
    removeAction: (state, action) => {
      const { item } = action.payload;
      if (state.length >= 2) {
        state.splice(item, 1);
      }
    },
    addPomodoro: (state, action) => { 
      const { index } = action.payload;
      state[index].time += 1;
    },
    reducePomodoro: (state, action) => { 
      const { index } = action.payload;
      state[index].time >= 2 ? state[index].time-= 1 : state[index].time;
    },
    editAction: (state, action) => {
      const { index, newText } = action.payload;
      state[index + 1].text = newText;
    }
  },
});

export const { addAction, removeAction, addPomodoro, reducePomodoro, editAction } = actionsSlice.actions;
export default actionsSlice.reducer;